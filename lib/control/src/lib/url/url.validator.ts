import { AbstractControl, ValidationErrors } from "@angular/forms";

/**
 * ipv4Validator
 * Validates that the value is an ipv4 address.
 *
 * @param control - The AbstractControl to validate.
 * @returns ValidationErrors or null if the validation passes.
 */

export const urlValidator = (control: AbstractControl): ValidationErrors | null => {
    const urlPattern = /^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$/i;
    return urlPattern.test(control.value) ? null : { url: true };
};
