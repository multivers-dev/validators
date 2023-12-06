import {MultiversControlValidators} from "../multivers-control-validators";
import {FormControl} from "@angular/forms";
import {rangeValidator} from "./range-validator";

describe('rangeValidator', () => {
    let formControl: FormControl;

    beforeEach(() => {
        formControl = new FormControl('', [rangeValidator(1, 10)]);
    });
    it('should be invalid with number', () => {
        formControl.setValue(11);
        expect(formControl.invalid).toBeTruthy();
    });

    it('should be invalid with string', () => {
        formControl.setValue('test');
        expect(formControl.invalid).toBeTruthy();
    });

    it('should be invalid with empty string', () => {
        expect(formControl.invalid).toBeTruthy();
    });

    it('should be valid with number', () => {
        formControl.setValue(1);
        expect(formControl.invalid).toBeFalsy();
    });

    it('should be valid with negative number', () => {
        formControl.setValue(-1);
        expect(formControl.invalid).toBeTruthy();
    });
});