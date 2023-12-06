import {FormControl} from "@angular/forms";
import {MultiversControlValidators} from "../multivers-control-validators";

describe('UppercaseValidator', () => {
    let formControl: FormControl;

    beforeEach(() => {
        formControl = new FormControl('', [MultiversControlValidators.upperCase]);
    });
    it('should create an instance', () => {
        expect(true).toBeTruthy();
    });

    it('should be invalid with number', () => {
        formControl.setValue(123);
        expect(formControl.invalid).toBeTruthy();
    });

    it('should be invalid with string', () => {
        formControl.setValue('test');
        expect(formControl.invalid).toBeTruthy();
    });

    it('should be valid', () => {
        formControl.setValue('TEST');
        expect(formControl.invalid).toBeFalsy();
        expect(formControl.errors).toEqual(null);
    });

    it('should be have no errors with empty string', () => {
        expect(formControl.errors).toBeNull();
    });


});

