import { AbstractControl, ValidationErrors, FormGroup, FormControl } from '@angular/forms';

/**
 * @description
 * Validator for FormGroup that checks if the number of fields that are filled is greater than or equal to the number of required fields. It takes the name of the fields as parameters.
 * @usageNotes
 * ### Validate that the number of fields that are filled is greater than or equal to the number of required fields
 * ```typescript
 * const formGroup = new FormGroup({
 *  firstField: new FormControl(''),
 *  secondField: new FormControl(''),
 *  thirdField: new FormControl(''),
 *  fourthField: new FormControl(''),
 *  }, [requiredSomeValidator(['firstField', 'secondField', fourthField])]);
 *  console.log(formGroup.errors); // { required: true }
 *  ```
 *
 * @returns A validator function that returns an error with the `required` property if the validation check fails, otherwise `null`.
 * @param fieldList - The list of fields.
 * @param numberRequired - The number of fields that must be filled.
 */
export const requiredSomeValidator = (fieldList : string[], numberRequired:number=1) => (group: AbstractControl): ValidationErrors | null => {
    if (!(group instanceof FormGroup)) {
        console.warn('[requiredSomeValidator] should be used as FormGroup Validator');
        return null;
    }

    const fields = fieldList.map(field => group.get(field) as FormControl<any>);
    const invalidFields = fields.filter(field => !field || field.invalid);
    if (invalidFields.length > 0) {
        console.warn('[requiredSomeValidator] should be used with valid fields');
        return null;
    }

    if (fields.length < numberRequired) {
        console.warn('[requiredSomeValidator] The number of fields to check is less than the number of required fields');
        return null;
    }

    if (numberRequired < 1) {
        console.warn('[requiredSomeValidator] should be used with at least 1 required field');
        return null;
    }

    // values is an array of all the values of the fields
    const values = fields.map(field => field.value);
    // hasValue is an array of all the values of the fields that are not empty
    const hasValue = values.filter(value => !!value);
    if (hasValue.length >= numberRequired) {
        return null;
    }
    return { required: true };

};
