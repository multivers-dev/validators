import {AbstractControl, ValidationErrors, ValidatorFn} from "@angular/forms";

/**
 * conditionalValidator
 * validates a control based on a condition.
 * @param condition - The condition to evaluate.
 * @param innerValidator - The validator to run if the condition is true.
 * @returns ValidationErrors or null if the validation passes.
 */
export const conditionalValidator = (condition: () => boolean, innerValidator: ValidatorFn) => (control: AbstractControl): ValidationErrors | null => {
    return condition() ? innerValidator(control) : null;
};
