import { AbstractControl, ValidationErrors } from "@angular/forms";

/**
 * ipv6Validator
 * Validates that the value is an IPv6 address.
 *
 * @param control - The AbstractControl to validate.
 * @returns ValidationErrors or null if the validation passes.
 */
export const ipv6Validator = (control: AbstractControl): ValidationErrors | null => {
    const value = control.value;

    if (!value) {
        return null;
    }

    if (typeof value !== 'string') {
        return { ipv6: true };
    }

    const parts = value.split(':');

    if (parts.length > 8) {
        return { ipv6: true };
    }

    for (const part of parts) {
        if (part.length === 0 || part.length > 4) {
            return { ipv6: true };
        }

        const num = parseInt(part, 16);

        if (isNaN(num) || num < 0 || num > 65535) {
            return { ipv6: true };
        }
    }

    return null;
};