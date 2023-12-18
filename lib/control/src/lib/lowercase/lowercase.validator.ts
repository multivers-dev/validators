import { AbstractControl, ValidationErrors } from "@angular/forms";

/**
 * lowerCaseValidator
 * Validates that the value has at least one lower case character.
 *
 * @param control - The AbstractControl to validate.
 * @returns ValidationErrors or null if the validation passes.
 */
export const lowerCaseValidator = (control: AbstractControl): ValidationErrors | null => {
    const value = control.value ;
    if (!value) {
      return null;
    }
    const hasLowerCase = /[a-z]+/.test(value);
    if (hasLowerCase){
      return null
    }
    return { hasLowerCase: true }
  };

