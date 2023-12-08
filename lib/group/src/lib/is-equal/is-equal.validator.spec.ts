import { FormGroup, FormControl } from '@angular/forms';
import {isEqualValidator} from "./is-equal.validator";

describe('EqualValidator', () => {
    it('should return validation error when fields are not equal', () => {
        const formGroup = new FormGroup({
            firstField: new FormControl('value1'),
            secondField: new FormControl('value2'),
        });

        const validatorFn = isEqualValidator('firstField', 'secondField');
        formGroup.setValidators(validatorFn);
        formGroup.updateValueAndValidity();

        expect(formGroup.errors).toEqual({ equal: true });
    });

    it('should return null when fields are equal', () => {
        const formGroup = new FormGroup({
            firstField: new FormControl('sameValue'),
            secondField: new FormControl('sameValue'),
        });

        const validatorFn = isEqualValidator('firstField', 'secondField');
        formGroup.setValidators(validatorFn);
        formGroup.updateValueAndValidity();

        expect(formGroup.errors).toEqual(null);
    });

    it('should return null when either field is invalid', () => {
        const formGroup = new FormGroup({
            firstField: new FormControl('validValue'),
            secondField: new FormControl({ value: 'invalidValue', disabled: true }),
        });

        const validatorFn = isEqualValidator('firstField', 'secondField');
        formGroup.setValidators(validatorFn);
        formGroup.updateValueAndValidity();

        expect(formGroup.errors).toEqual({ equal: true });
    });

    it('should return null when either field is missing', () => {
        const formGroup = new FormGroup({
            firstField: new FormControl('value1'),
        });

        const validatorFn = isEqualValidator('firstField', 'secondField');
        formGroup.setValidators(validatorFn);
        formGroup.updateValueAndValidity();

        expect(formGroup.errors).toBeNull();
    });

    it('should return null when form group is not an instance of FormGroup', () => {
        const formControl = new FormControl('value');

        const validatorFn = isEqualValidator('firstField', 'secondField');
        const result = validatorFn(formControl);

        expect(result).toBeNull();
    });
});
