import { FormGroup, FormControl } from '@angular/forms';
import { requiredOneOfTwoValidator } from './required-one-of-two.validator';

describe('Required One of Two Validator', () => {
    it('should return validation error when both fields are empty', () => {
        const formGroup = new FormGroup({
            firstField: new FormControl(''),
            secondField: new FormControl(''),
        });

        const validatorFn = requiredOneOfTwoValidator('firstField', 'secondField');
        formGroup.setValidators(validatorFn);
        formGroup.updateValueAndValidity();

        expect(formGroup.errors).toEqual({ required: true });
    });

    it('should return null when first field is not empty', () => {
        const formGroup = new FormGroup({
            firstField: new FormControl('notEmpty'),
            secondField: new FormControl(''),
        });

        const validatorFn = requiredOneOfTwoValidator('firstField', 'secondField');
        formGroup.setValidators(validatorFn);
        formGroup.updateValueAndValidity();

        expect(formGroup.errors).toBeNull();
    });

    it('should return null when second field is not empty', () => {
        const formGroup = new FormGroup({
            firstField: new FormControl(''),
            secondField: new FormControl('notEmpty'),
        });

        const validatorFn = requiredOneOfTwoValidator('firstField', 'secondField');
        formGroup.setValidators(validatorFn);
        formGroup.updateValueAndValidity();

        expect(formGroup.errors).toBeNull();
    });

    it('should return null when both fields are not empty', () => {
        const formGroup = new FormGroup({
            firstField: new FormControl('notEmpty1'),
            secondField: new FormControl('notEmpty2'),
        });

        const validatorFn = requiredOneOfTwoValidator('firstField', 'secondField');
        formGroup.setValidators(validatorFn);
        formGroup.updateValueAndValidity();

        expect(formGroup.errors).toBeNull();
    });

    it('should return null when either field is invalid', () => {
        const formGroup = new FormGroup({
            firstField: new FormControl({ value: 'invalidValue', disabled: true }),
            secondField: new FormControl(''),
        });

        const validatorFn = requiredOneOfTwoValidator('firstField', 'secondField');
        formGroup.setValidators(validatorFn);
        formGroup.updateValueAndValidity();

        expect(formGroup.errors).toBeNull();
    });

    it('should return null when either field is missing', () => {
        const formGroup = new FormGroup({
            firstField: new FormControl('notEmpty'),
        });

        const validatorFn = requiredOneOfTwoValidator('firstField', 'secondField');
        formGroup.setValidators(validatorFn);
        formGroup.updateValueAndValidity();

        expect(formGroup.errors).toBeNull();
    });

    it('should return null when form group is not an instance of FormGroup', () => {
        const spyObj = jest.spyOn(console, 'warn')

        const formControl = new FormControl('value', [requiredOneOfTwoValidator('firstField', 'secondField')]);

        expect(formControl.errors).toBeNull();
        expect(spyObj).toHaveBeenCalledTimes(1);
    });
});
