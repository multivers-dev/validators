import { FormGroup, FormControl } from '@angular/forms';
import {MultiversGroupValidators} from "../multivers-group-validators";

describe('DifferentValidator', () => {
    let formGroup : FormGroup;

    beforeEach(() => {
        formGroup = new FormGroup({
            firstField: new FormControl(''),
            secondField: new FormControl(''),
        }, MultiversGroupValidators.isDifferent('firstField', 'secondField'));
    });
    it('should return validation error when fields are equal', () => {
        formGroup.controls['firstField'].setValue('value2');
        formGroup.controls['secondField'].setValue('value2');
        expect(formGroup.errors).toEqual({ different: true });
    });

    it('should return null when fields are different', () => {
        formGroup.controls['firstField'].setValue('value1');
        formGroup.controls['secondField'].setValue('otherValue');
        expect(formGroup.errors).toEqual(null);
    });

    it('should return null when either field is invalid', () => {

        const validatorFn = MultiversGroupValidators.isDifferent('firstField', 'secondField');
        formGroup.controls['firstField'].setValue('validValue');
        formGroup.controls['secondField'].setValue( 'invalidValue');
        expect(formGroup.errors).toEqual(null);
    });

    it('should return null when either field is missing', () => {
        const formGroup = new FormGroup({
            firstField: new FormControl('value1'),
        });

        const validatorFn = MultiversGroupValidators.isDifferent('firstField', 'secondField');
        formGroup.setValidators(validatorFn);
        formGroup.updateValueAndValidity();

        expect(formGroup.errors).toBeNull();
    });

    it('should return null when form group is not an instance of FormGroup', () => {
        const formControl = new FormControl('value');

        const validatorFn = MultiversGroupValidators.isDifferent('firstField', 'secondField');
        const result = validatorFn(formControl);

        expect(result).toBeNull();
    });
});
