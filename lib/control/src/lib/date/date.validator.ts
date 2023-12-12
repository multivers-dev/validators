import {AbstractControl, FormControl, ValidationErrors} from "@angular/forms";

/**
 * dateValidator
 * Validates that the value is a Date.
 *
 * @returns ValidationErrors or null if the validation passes.
 * @param min - The minimum date
 * @param max - The maximum date
 */
export const dateValidator = (min:Date|null=null, max:Date|null=null)  =>  (control: AbstractControl): ValidationErrors | null => {
    if (!control || !control.value) {
        return null;
    }
    const date = new Date(control.value);
    if(min && date < min) {
        return { minDate: true };
    }
    if(max && date > max) {
        return { maxDate: true };
    }
    return null;
};
