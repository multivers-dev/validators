import { AbstractControl, ValidationErrors } from "@angular/forms";

/**
 * integerValidator
 * Validates that the value is an integer.
 *
 * @param control - The AbstractControl to validate.
 * @returns ValidationErrors or null if the validation passes.
 */
export const integerValidator = (control: AbstractControl): ValidationErrors | null => {
    return Number.isInteger(control.value) ? null : { integer: true };
};
