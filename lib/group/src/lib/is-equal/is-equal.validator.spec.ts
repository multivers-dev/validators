import {FormGroup, FormControl} from '@angular/forms';
import {MultiversGroupValidators} from "../multivers-group-validators";

describe('EqualValidator', () => {
    let formGroup: FormGroup;

    beforeEach(() => {
        formGroup = new FormGroup({
            firstField: new FormControl(''),
            secondField: new FormControl(''),
        }, MultiversGroupValidators.isEquals('firstField', 'secondField'));
    });


    it('should return validation error when fields are not equal', () => {
        formGroup.controls['firstField'].setValue('value1');
        formGroup.controls['secondField'].setValue('value2');
        expect(formGroup.errors).toEqual({equal: true});
    });

    it('should return null when fields are equal', () => {
        formGroup.controls['firstField'].setValue('sameValue');
        formGroup.controls['secondField'].setValue('sameValue');
        expect(formGroup.errors).toEqual(null);
    });

    it('should return null when either field is invalid', () => {
        formGroup.controls['firstField'].setValue('validValue');
        formGroup.controls['secondField'].setValue('invalidValue');
        expect(formGroup.errors).toEqual({equal: true});
    });

    it('should return null when either field is missing', () => {
        const formGroup = new FormGroup({
            firstField: new FormControl('value1'),
        });

        const validatorFn = MultiversGroupValidators.isEquals('firstField', 'secondField');
        formGroup.setValidators(validatorFn);
        formGroup.updateValueAndValidity();

        expect(formGroup.errors).toBeNull();
    });

    it('should return null when form group is not an instance of FormGroup', () => {
        const formControl = new FormControl('value');

        const validatorFn = MultiversGroupValidators.isEquals('firstField', 'secondField');
        const result = validatorFn(formControl);

        expect(result).toBeNull();
    });
});
