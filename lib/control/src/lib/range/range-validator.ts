import { AbstractControl, ValidationErrors } from "@angular/forms";

/**
 * rangeValidator
 * Validates that the value is between min and max.
 *
 * @param min - The minimum value.
 * @param max - The maximum value.
 * @returns ValidationErrors or null if the validation passes.
 */

export const rangeValidator = (min: number, max: number) => (control: AbstractControl): ValidationErrors | null => {
    const value = +control.value;
    return value >= min && value <= max ? null : { range: true };
};
