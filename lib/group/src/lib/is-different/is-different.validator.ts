import { AbstractControl, ValidationErrors, FormGroup, FormControl } from '@angular/forms';

/**
 * @description
 * Validator for FormGroup that checks if the fiels are different.
 *
 * @usageNotes
 * ### Validate that two fields are equal
 * ```typescript
 * const formGroup = new FormGroup({
 *   password: new FormControl('123456'),
 *   confirmPassword: new FormControl('123456'),
 *   }, [isDifferentValidator('password', 'confirmPassword')]);
 *   console.log(formGroup.errors); // { different: true }
 *   ```
 *
 * @returns A validator function that returns an error with the `different` property if the validation is not equal, otherwise `null`.
 * @param firstField - The name of the first field.
 * @param secondField - The name of the second field.
 */
export const isDifferentValidator = (firstField: string, secondField: string) => (group: AbstractControl): ValidationErrors | null => {
    if (!(group instanceof FormGroup)) {
        console.warn('[equalValidator] should be used as FormGroup Validator');
        return null;
    }

    const first = group.get(firstField) as FormControl<any>;
    const second = group.get(secondField) as FormControl<any>;

    if (!first || !second  || first.invalid || second.invalid ) {
        return null;
    }


    const firstValue = first.value;
    const secondValue = second.value;
    if (firstValue !== secondValue) {
        return null;
    }
    return { different: true };
};
