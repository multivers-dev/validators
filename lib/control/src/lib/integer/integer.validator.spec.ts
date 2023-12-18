import {MultiversControlValidators} from "../multivers-control-validators";
import {FormControl} from "@angular/forms";

describe('IntegerValidator', () => {
    let formControl: any;
    beforeEach(() => {
            formControl = new FormControl('', MultiversControlValidators.integer);
    });

    it('should create an instance', () => {
            expect(true).toBeTruthy();
    });

    it('should be valid with number', () => {
            formControl.setValue(123);
            expect(formControl.invalid).toBeFalsy();
    });

    it('should be valid with negative number', () => {
        formControl.setValue(-123);
        expect(formControl.invalid).toBeFalsy();
    });

    it('should be invalid with string', () => {
            formControl.setValue('test');
            expect(formControl.invalid).toBeTruthy();
    });

    it('should be invalid with empty string', () => {
            expect(formControl.invalid).toBeTruthy();
    });

    it('should be invalid with float', () => {
            formControl.setValue(123.123);
            expect(formControl.invalid).toBeTruthy();
    });


});