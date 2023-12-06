import { AbstractControl, ValidationErrors } from "@angular/forms";

/**
 * ipv4Validator
 * Validates that the value is an ipv4 address.
 *
 * @param control - The AbstractControl to validate.
 * @returns ValidationErrors or null if the validation passes.
 */
export const ipv4Validator = (control: AbstractControl): ValidationErrors | null => {
    let value = control.value;

    if (!value) {
        return null;
    }
    if (typeof value !== 'string') {
        return { ipv4: true };
    }

    let parts = value.split('.');

    if (parts.length !== 4) {
        return { ipv4: true };
    }

    for (let part of parts) {
        if (part.length > 1 && part.charAt(0) === '0') {
            return { ipv4: true }; // Reject parts with leading zeros
        }

        if (part.length > 3 || part.length === 0) {
            return { ipv4: true };
        }

        let num = Number(part);

        if (isNaN(num) || num < 0 || num > 255) {
            return { ipv4: true };
        }
    }

    return null;
};
