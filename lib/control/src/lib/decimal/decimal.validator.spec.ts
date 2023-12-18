import {FormControl} from "@angular/forms";
import {MultiversControlValidators} from "../multivers-control-validators";

describe('decimalValidator', () => {
    let formControl: FormControl<string |number| null>;
    beforeEach(() => {
        formControl = new FormControl('', MultiversControlValidators.decimal)
    });

    it('should create an instance', () => {
        expect(true).toBeTruthy();
    });

    it('should be invalid with empty string', () => {
        expect(formControl.invalid).toBeTruthy();
    });

    it('should be invalid with string', () => {
        formControl.setValue('test')
        expect(formControl.invalid).toBeTruthy();
    });

    it('should be invalid with number', () => {
        formControl.setValue(123)
        expect(formControl.invalid).toBeTruthy();
    });

    it('should be invalid with decimal', () => {
        formControl.setValue(123.123)
        expect(formControl.invalid).toBeFalsy();
    });
});