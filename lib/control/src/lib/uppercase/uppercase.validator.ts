import { AbstractControl, ValidationErrors } from "@angular/forms";

/**
 * upperCaseValidator
 * @returns
 */
export const upperCaseValidator = (control: AbstractControl): ValidationErrors | null => {
    const value = control.value;
    if (!value) {
      return null;
    }
    const hasUpperCase = /[A-Z]+/.test(value);
    if (hasUpperCase){
      return { hasUpperCase: true }
    }
    return null;
  };

