import { AbstractControl, ValidationErrors } from "@angular/forms";

/**
 * decimalValidator
 * Validates that the value is a decimal.
 * @param control - The AbstractControl to validate.
 * @returns ValidationErrors or null if the validation passes.
 */
export const decimalValidator = (control: AbstractControl): ValidationErrors | null => {
    return !isNaN(control.value) && control.value % 1 !== 0 ? null : { decimal: true };
};
