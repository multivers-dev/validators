import {FormControl} from "@angular/forms";
import {MultiversControlValidators} from "../multivers-control-validators";

describe('PhoneNumberValidator', () => {
    let formControl: FormControl<string | null> ;
    const invalidPhoneNumbers = [
        '123456789',
        '1234567890',
        '12345678901',
        '123456789012',
        '1234567890123',
        '12345678901234',
        '123456789012345',
        '1234567890123456',
        '12345678901234567',
        '123456789012345678',];
    beforeEach(() => {
        formControl = new FormControl('', [MultiversControlValidators.phoneNumber]);
    });

    it('should create an instance', () => {
        expect(true).toBeTruthy();
    });

    it('should be invalid', () => {
        invalidPhoneNumbers.forEach((phoneNumber: string | null) => {
            formControl.setValue(phoneNumber);
            expect(formControl.invalid).toBeTruthy();
        });
    });


});