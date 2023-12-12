import { AbstractControl, ValidationErrors } from "@angular/forms";

/**
 * dateValidator
 * Validates that the value is a Date.
 *
 * @returns ValidationErrors or null if the validation passes.
 * @param min - The minimum date
 * @param max - The maximum date
 */
export const dateValidator = (min:Date|null=null, max:Date|null=null)  =>  (control: AbstractControl): ValidationErrors | null => {
    if(!( control.value instanceof Date )) {
        return { date: true };
    }
    if(min && control.value < min) {
        return { minDate: true };
    }
    if(max && control.value > max) {
        return { maxDate: true };
    }
    return null;
};
