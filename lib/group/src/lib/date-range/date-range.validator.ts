import { ValidatorFn, AbstractControl, ValidationErrors, FormGroup, FormControl } from '@angular/forms';

/**
 * @description
 * Validator for FormGroup that checks if the start date is before or equal to the end date.
 *
 * @usageNotes
 *
 * ### Validate that the start date is before or equal to the end date
 *
 * ```typescript
 * const formGroup = new FormGroup({
 *    startDate: new FormControl(new Date('2023-02-01')),
 *    endDate: new FormControl(new Date('2023-01-31')),
 *    }, [dateRangeValidator('startDate', 'endDate')]);
 *
 *    console.log(formGroup.errors); // { dateRange: true }
 *    ```
 *
 * @returns A validator function that returns an error with the `dateRange` property if the validation check fails, otherwise `null`.
 * @param startFieldName - The name of the start date field.
 * @param endFieldName - The name of the end date field.
 */
export const dateRangeValidator = (startFieldName: string,endFieldName: string ): ValidatorFn => (group: AbstractControl): ValidationErrors | null => {
    if (!(group instanceof FormGroup)) {
        console.warn('[dateRangeValidator] should be used as FormGroup Validator');
        return null;
    }

    const startField = group.get(startFieldName) as FormControl<Date>;
    const endField = group.get(endFieldName) as FormControl<Date>;
    console.log(!startField , startField.invalid, endField.invalid,  !endField)
    if (!startField || !endField || !startField.value || !endField.value || startField.invalid || endField.invalid ){
        return null;
    }
    if ( !(startField.value instanceof Date) || !(endField.value instanceof Date)) {
        return { dateRange: true };
    }
    console.log('invalid', startField.value, endField.value);


    const startDateValue = startField.value;
    const endDateValue = endField.value;
    return startDateValue <= endDateValue ? null : { dateRange: true };
};
