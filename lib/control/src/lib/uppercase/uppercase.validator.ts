import { AbstractControl, ValidationErrors } from "@angular/forms";

/**
 * upperCaseValidator
 * Validates that the value has at least one upper case letter.
 *
 * @param control - The AbstractControl to validate.
 * @returns ValidationErrors or null if the validation passes.
 */
export const upperCaseValidator = (control: AbstractControl): ValidationErrors | null => {
    const value = control.value;
    if (!value) {
      return null;
    }
    const hasUpperCase = /[A-Z]+/.test(value);
    if (hasUpperCase){
      return null
    }
    return { hasUpperCase: true }
  };

