import { FormControl } from '@angular/forms';
import {MultiversControlValidators} from "../../multivers-control-validators";
import {expect} from "@playwright/test";

describe('ipv4Validator', () => {
    let formControl: FormControl;

    let invalidValues = [
        '1',
        '1.1',
        '1.1.1',
        '1.1.1.',
        '256.256.256.256', // Invalid because each part should be between 0 and 255
        '192.168.0.1.1',   // Invalid because there are more than 4 parts
        '192.168.0.01',    // Invalid because leading zeros are not allowed
    ];

    let validValues = [
        '0.0.0.0',
        '192.168.0.1',
        '255.255.255.255',
    ];

    beforeEach(() => {
        formControl = new FormControl('', MultiversControlValidators.ipv4);
    });

    it('should return null for valid IPv4 addresses', () => {
        for (const value of validValues) {
            formControl.setValue(value);
            expect(formControl.valid).toBeTruthy();
        }
    });

    it('should return an error object for invalid IPv4 addresses', () => {
        for (const value of invalidValues) {
            formControl.setValue(value);
            expect(formControl.invalid).toBeTruthy();
            expect(formControl.errors).toEqual({ ipv4: true });
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
