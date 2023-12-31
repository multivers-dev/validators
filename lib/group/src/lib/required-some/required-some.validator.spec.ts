import { FormGroup, FormControl } from '@angular/forms';
import {MultiversGroupValidators} from "../multivers-group-validators";

describe('MultiversGroupValidators.requiredSome', () => {
    let formGroup: FormGroup;

    beforeEach(() => {
        formGroup = new FormGroup({
            field1: new FormControl('value1'),
            field2: new FormControl(''),
            field3: new FormControl('value3'),
        }, MultiversGroupValidators.requiredSome(['field1', 'field2', 'field3'], 1));
    });

    it('should return console for valid fields', () => {
        const spy = jest.spyOn(console, 'warn');
        formGroup.addValidators(MultiversGroupValidators.requiredSome(['field1', 'field2', 'field13'], 1));
        formGroup.updateValueAndValidity();
        expect(formGroup.errors).toBeNull();
        expect(spy).toHaveBeenCalled();
        formGroup.addValidators(MultiversGroupValidators.requiredSome(['field1', 'field2', 'field3'], 4));
        formGroup.updateValueAndValidity();
        // expect(spy).toHaveBeenCalled();
        expect(formGroup.errors).toBeNull();

    });
    it('should return null for valid fields', () => {
        formGroup.controls['field2'].setValue('value2');
        expect(formGroup.valid).toBeTruthy();
        expect(formGroup.errors).toBeNull();
    });


    it('should return null when form group is not an instance of FormGroup', () => {
        const formControl = new FormControl('value', [MultiversGroupValidators.requiredSome(['firstField', 'secondField'])]);
        expect(formControl.errors).toBeNull();
    });


    it('should return { required: true } for invalid fields', () => {
        expect(formGroup.valid).toBeTruthy();
        expect(formGroup.errors).toBeNull();
        formGroup.controls['field1'].setValue('');
        formGroup.controls['field3'].setValue('');
        expect(formGroup.valid).toBeFalsy();
        expect(formGroup.errors).toEqual({ fields : ['field1', 'field2', 'field3'], "numberRequired": 1, required: true });
    });


    it('should handle less required fields', () => {
        const validator = MultiversGroupValidators.requiredSome(['field1', 'field2', 'field3'], 2);
        expect(validator(formGroup)).toBeNull();
    });

    it('should handle less than 1 required field', () => {
        const validator = MultiversGroupValidators.requiredSome(['field1', 'field2', 'field3'], 0);
        expect(validator(formGroup)).toBeNull();
    });
});

