import { AbstractControl, ValidationErrors } from "@angular/forms";

/**
 * numberValidator
 * Validates that the value is a number.
 *
 * @param control - The AbstractControl to validate.
 * @returns ValidationErrors or null if the validation passes.
 */

export const numberValidator = (control: AbstractControl): ValidationErrors | null => {
    return !isNaN(control.value) ? null : { number: true };
};
