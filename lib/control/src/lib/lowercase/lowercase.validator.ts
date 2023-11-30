import { AbstractControl, ValidationErrors } from "@angular/forms";

/**
 * lowerCaseValidator
 * @returns
 */
export const lowerCaseValidator = (control: AbstractControl): ValidationErrors | null => {
    const value = control.value;
    if (!value) {
      return null;
    }
    const hasLowerCase = /[a-z]+/.test(value);
    if (hasLowerCase){
      return { hasLowerCase: true }
    }
    return null;
  };

