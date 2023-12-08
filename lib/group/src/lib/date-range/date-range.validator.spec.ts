import { FormGroup, FormControl } from '@angular/forms';
import {dateRangeValidator} from "./date-range.validator";

describe('DateRangeValidator', () => {
    it('should return null when start date is before or equal to end date', () => {
        const formGroup = new FormGroup({
            startDate: new FormControl(new Date('2023-01-01')),
            endDate: new FormControl(new Date('2023-01-31')),
        });

        const validatorFn = dateRangeValidator('startDate', 'endDate');
        formGroup.setValidators(validatorFn);
        formGroup.updateValueAndValidity();

        expect(formGroup.errors).toBeNull();
    });

    it('should return validation error when start date is after end date', () => {
        const formGroup = new FormGroup({
            startDate: new FormControl(new Date('2023-02-01')),
            endDate: new FormControl(new Date('2023-01-31')),
        });

        const validatorFn = dateRangeValidator('startDate', 'endDate');
        expect(formGroup.errors).toEqual(null);
        formGroup.setValidators(validatorFn);
        formGroup.updateValueAndValidity();
        expect(formGroup.invalid).toBeTruthy();
        expect(formGroup.errors).toEqual({ dateRange: true });
    });

    it('should return null when start date and end date are equal', () => {
        const formGroup = new FormGroup({
            startDate: new FormControl(new Date('2023-01-15')),
            endDate: new FormControl(new Date('2023-01-15')),
        });

        const validatorFn = dateRangeValidator('startDate', 'endDate');
        formGroup.setValidators(validatorFn);
        formGroup.updateValueAndValidity();

        expect(formGroup.errors).toBeNull();
    });

    it('should return null when start date and end date are null', () => {
        const formGroup = new FormGroup({
            startDate: new FormControl(null),
            endDate: new FormControl(null),
        });

        const validatorFn = dateRangeValidator('startDate', 'endDate');
        formGroup.setValidators(validatorFn);
        formGroup.updateValueAndValidity();

        expect(formGroup.errors).toBeNull();
    });


    it('should return error when start date and end date are not date', () => {
        const formGroup = new FormGroup({
            startDate: new FormControl('startDate'),
            endDate: new FormControl('endDate'),
        });

        const validatorFn = dateRangeValidator('startDate', 'endDate');
        formGroup.setValidators(validatorFn);
        formGroup.updateValueAndValidity();

        expect(formGroup.errors).toEqual({ dateRange: true });
        expect(formGroup.invalid).toBeTruthy();
    });

    it('should return null when form group is not an instance of FormGroup', () => {
        const spyObj = jest.spyOn(console, 'warn')

        const formControl = new FormControl(new Date('2023-01-01'), [ dateRangeValidator('startDate', 'endDate')]);

        expect(formControl.errors).toBeNull();
        expect(spyObj).toHaveBeenCalledTimes(1);
    });
});
