import { AbstractControl, ValidationErrors } from "@angular/forms";

/**
 * equalValidator
 * Validates that the value is equal to the value of the compareControl.
 *
 * @param compareControl - The AbstractControl to validate.
 *  @returns ValidationErrors or null if the validation passes.
 */
export const equalValidator = (compareControl: AbstractControl) => (control: AbstractControl): ValidationErrors | null => {
    return control.value === compareControl.value ? null : { equal: true };
};
