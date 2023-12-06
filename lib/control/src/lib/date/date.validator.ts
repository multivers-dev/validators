import { AbstractControl, ValidationErrors } from "@angular/forms";

/**
 * dateValidator
 * Validates that the value is a Date.
 *
 * @param control - The AbstractControl to validate.
 * @returns ValidationErrors or null if the validation passes.
 */
export const dateValidator = (control: AbstractControl): ValidationErrors | null => {
    return control.value instanceof Date ? null : { date: true };
};
