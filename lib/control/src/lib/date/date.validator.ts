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
    console.log(!control , !control.value)
    console.log(control.value)
    if (!control || !control.value) {
        console.warn('[dateValidator] should be used as FormControl Validator');
        return null;
    }
    const date = new Date(control.value);
    console.log(date);
    if(min && date < min) {
        return { minDate: true };
    }
    if(max && date > max) {
        return { maxDate: true };
    }
    return null;
};
