import {AbstractControl, FormGroup, ValidationErrors} from "@angular/forms";
import {notContainsValidator} from "./not-contains/not-contains.validator";
import {requiredSomeValidator} from "./required-some/required-some.validator";
import {dateRangeValidator} from "./date-range/date-range.validator";
import {isEqualValidator} from "./is-equal/is-equal.validator";
import {isDifferentValidator} from "./is-different/is-different.validator";
import {requiredOneOfTwoValidator} from "./required-one-of-two/required-one-of-two.validator";

/**
 * @description
 * Provides a set of validators that can be used by from group
 *
 * A validator is a function that processes a `FormGroup` and returns an error map or null.
 * A null map means that validation has passed.
 *
 *
 * @publicApi
 */
export class MultiversGroupValidators {

    static notContains = (control: string, fields: string[]) => (formGroup: AbstractControl): ValidationErrors | null => {
        return notContainsValidator(control, fields)(formGroup);
    }

    static requiredOnOfTwo = (firstField: string, secondField: string) => (formGroup: AbstractControl): ValidationErrors | null => {
        return requiredOneOfTwoValidator(firstField, secondField)(formGroup);
    }

    static requiredSome = (fieldList: string[], required: number = 1) => (formGroup: AbstractControl): ValidationErrors | null => {
        return requiredSomeValidator(fieldList, required)(formGroup);
    }

    static dateRange = (from: string, to: string) => (formGroup: AbstractControl): ValidationErrors | null => {
        return dateRangeValidator(from, to)(formGroup);
    }

    static isDifferent = (firstField: string, secondField: string) => (formGroup: AbstractControl): ValidationErrors | null => {
        return isDifferentValidator(firstField, secondField)(formGroup);
    }

    static isEquals = (firstField: string, secondField: string) => (formGroup: AbstractControl): ValidationErrors | null => {
        return isEqualValidator(firstField, secondField)(formGroup);
    }

}