import { AbstractControl, ValidationErrors } from "@angular/forms";

/**
 * creditCardValidator
 * Validates a credit card number using the Luhn check.
 *
 * @param control - The AbstractControl to validate.
 * @returns ValidationErrors or null if the validation passes.
 */
export const creditCardValidator = (control: AbstractControl): ValidationErrors | null => {
    // Implement logic to validate credit card number
    const value = control.value;
    if (!value) {
        return null;
    }
    const LuhnCheck = (function () {
        const luhnArr = [0, 2, 4, 6, 8, 1, 3, 5, 7, 9];
        return function (str: string) {
            let counter = 0;
            let incNum;
            let odd = false;
            const temp = String(str).replace(/[^\d]/g, "");
            if (temp.length == 0)
                return false;
            for (let i = temp.length - 1; i >= 0; --i) {
                incNum = parseInt(temp.charAt(i), 10);
                counter += (odd = !odd) ? incNum : luhnArr[incNum];
            }
            return (counter % 10 == 0);
        }
    })();
    return LuhnCheck(value) ? null : { creditCard: true };
};
