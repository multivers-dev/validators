import { FormGroup, FormControl } from '@angular/forms';
import {isDifferentValidator} from "./is-different.validator";

describe('DifferentValidator', () => {
    it('should return validation error when fields are equal', () => {
        const formGroup = new FormGroup({
            firstField: new FormControl('value2'),
            secondField: new FormControl('value2'),
        });

        const validatorFn = isDifferentValidator('firstField', 'secondField');
        formGroup.setValidators(validatorFn);
        formGroup.updateValueAndValidity();

        expect(formGroup.errors).toEqual({ different: true });
    });

    it('should return null when fields are different', () => {
        const formGroup = new FormGroup({
            firstField: new FormControl('value1'),
            secondField: new FormControl('otherValue'),
        });

        const validatorFn = isDifferentValidator('firstField', 'secondField');
        formGroup.setValidators(validatorFn);
        formGroup.updateValueAndValidity();

        expect(formGroup.errors).toEqual(null);
    });

    it('should return null when either field is invalid', () => {
        const formGroup = new FormGroup({
            firstField: new FormControl('validValue'),
            secondField: new FormControl({ value: 'invalidValue', disabled: true }),
        });

        const validatorFn = isDifferentValidator('firstField', 'secondField');
        formGroup.setValidators(validatorFn);
        formGroup.updateValueAndValidity();

        // expect(formGroup.errors).toEqual({ different: true });
        expect(formGroup.errors).toEqual(null);
    });

    it('should return null when either field is missing', () => {
        const formGroup = new FormGroup({
            firstField: new FormControl('value1'),
        });

        const validatorFn = isDifferentValidator('firstField', 'secondField');
        formGroup.setValidators(validatorFn);
        formGroup.updateValueAndValidity();

        expect(formGroup.errors).toBeNull();
    });

    it('should return null when form group is not an instance of FormGroup', () => {
        const formControl = new FormControl('value');

        const validatorFn = isDifferentValidator('firstField', 'secondField');
        const result = validatorFn(formControl);

        expect(result).toBeNull();
    });
});
