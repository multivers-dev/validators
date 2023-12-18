import { AbstractControl, ValidationErrors, FormGroup, FormControl } from '@angular/forms';

/**
 * @description
 * Validator for FormGroup that checks if one of the two fields is required. It takes the name of the two fields as parameters.
 *
 * @usageNotes
 * ### Validate that one of the two fields is required
 * ```typescript
 * const formGroup = new FormGroup({
 *  firstField: new FormControl(''),
 *  secondField: new FormControl(''),
 *  }, [requiredOneOfTwoValidator('firstField', 'secondField')]);
 *  console.log(formGroup.errors); // { required: true }
 *  ```
 *
 * @returns A validator function that returns an error with the `required` property if the validation check fails, otherwise `null`.
 * @param firstField - The name of the first field.
 * @param secondField - The name of the second field.
 */
export const requiredOneOfTwoValidator = (firstField: string, secondField: string) => (group: AbstractControl): ValidationErrors | null => {
    if (!(group instanceof FormGroup)) {
        console.warn('[requiredOneOfTwoValidator] should be used as FormGroup Validator');
        return null;
    }

    const first = group.get(firstField) as FormControl<any>;
    const second = group.get(secondField) as FormControl<any>;

    if (!first || !second || first.invalid || second.invalid) {
        return null;
    }

    const firstValue = first.value;
    const secondValue = second.value;

    if (firstValue || secondValue) {
        return null;
    }

    return { required: true };
};
