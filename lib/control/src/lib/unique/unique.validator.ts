import { AbstractControl, ValidationErrors } from "@angular/forms";

/**
 * uniqueValidator
 * Validates that the value is unique.
 *
 * @param existingValues - The existing values.
 * @returns ValidationErrors or null if the validation passes.
 */

export const uniqueValidator = (existingValues: any[]) => (control: AbstractControl): ValidationErrors | null => {
    return existingValues.includes(control.value) ? { unique: true } : null;
};
