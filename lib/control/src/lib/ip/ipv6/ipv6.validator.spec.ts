import { FormControl } from '@angular/forms';
import {MultiversControlValidators} from "../../multivers-control-validators";

describe('ipv6Validator', () => {
    let formControl: FormControl;

    let invalidValues = [
        12345,
        '1',
        '1:1',
        '1:1:1',
        ':::',
        '2001:db8::1::1', // Invalid because there are more than one consecutive colons
        '2001:::1',       // Invalid because there are more than one consecutive colons
        '2001:::1:1',     // Invalid because there are more than one consecutive colons
        '2001:db8::1::1', // Invalid because there are more than one consecutive colons
        '2001:db8:::1',   // Invalid because there are more than one consecutive colons
        '2001:db8:0:0:1::1::1', // Invalid because there are more than one consecutive colons
        '2001:db8:0:0:1::1:1:', // Invalid because there are more than one consecutive colons
    ];

    let validValues = [
        '2001:0db8:85a3:0000:0000:8a2e:0370:7334',
        '2001:db8::1',
        '2001:db8:0:0:1::1',
        '2001:db8::1:1:1',
        '2001:0db8:0000:0042:0000:8a2e:0370:7334',
        '2001:db8:0000:0042:0000:8a2e:0370:7334',
        '2001:db8:0:0:1:1:1:1',
        '2001:db8:85a3:0:0:8a2e:370:7334',
    ];

    beforeEach(() => {
        formControl = new FormControl('', MultiversControlValidators.ipv6);
    });

    it('should return null for valid IPv6 addresses', () => {
        for (const value of validValues) {
            formControl.setValue(value);
            expect(formControl.invalid).toBeFalsy();
        }
    });

    it('should return an error object for invalid IPv6 addresses', () => {
        for (const value of invalidValues) {
            formControl.setValue(value);
            console.log(value, formControl.errors, formControl.valid)
            expect(formControl.invalid).toBeTruthy();
            expect(formControl.errors).toEqual({ ipv6: true });
        }
    });

    it('should return null for an empty value', () => {
        formControl.setValue('');
        expect(formControl.valid).toBeTruthy();
    });

    it('should return null for null value', () => {
        formControl.setValue(null);
        expect(formControl.valid).toBeTruthy();
    });
});
