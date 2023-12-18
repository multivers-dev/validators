import { AbstractControl, ValidationErrors } from "@angular/forms";

/**
 * phoneNumberValidator
 * Validates that the value is a phone number.
 *
 * @param control - The AbstractControl to validate.
 * @returns ValidationErrors or null if the validation passes.
 */
export const phoneNumberValidator = (control: AbstractControl): ValidationErrors | null => {
    const value = control.value;
    if (!value) {
      return null;
    }
    let hasPhoneNumber = new RegExp(/^[+]{1}(?:[0-9\-\(\)\/\.]\s?){6, 15}[0-9]{1}$/).test(value);
    if (hasPhoneNumber){
      return null
    }
    return { phoneNumber: true }
};
