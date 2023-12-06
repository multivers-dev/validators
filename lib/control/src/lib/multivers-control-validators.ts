import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";
import { lowerCaseValidator } from "./lowercase/lowercase.validator";
import { upperCaseValidator } from "./uppercase/uppercase.validator";
import { hexadecimalColorValidator } from "./hexadecimal-color/hexadecimal-color.validator";
import {conditionalValidator} from "./conditional/conditional.validator";
import {dateValidator} from "./date/date.validator";
import {decimalValidator} from "./decimal/decimal.validator";
import {equalValidator} from "./equal/equal.validator";
import {integerValidator} from "./integer/integer.validator";
import {uniqueValidator} from "./unique/unique.validator";
import {creditCardValidator} from "./credit-card/credit-card.validator";
import {fileTypeValidator} from "./file-type/file-type.validator";
import {ipv4Validator} from "./ip/ipv4/ipv4.validator";
import {ipv6Validator} from "./ip/ipv6/ipv6.validator";
import {rangeValidator} from "./range/range-validator";
import {numberValidator} from "./number/number.validator";
import {urlValidator} from "./url/url.validator";
import {phoneNumberValidator} from "./phone-number/phone-nomber.validation";

/**
 * @description
 * Provides a set of validators that can be used by from control
 *
 * A validator is a function that processes a `FormControl` and returns an error map or null. 
 * A null map means that validation has passed.
 *
 *
 * @publicApi
 */
export class MultiversControlValidators{ 

      static date(control: AbstractControl): ValidationErrors|null {
        return dateValidator(control);
      }

      static conditional(condition: () => boolean, validator: ValidatorFn): ValidatorFn {
        return conditionalValidator(condition, validator);
      }

      static creditCard(control: AbstractControl): ValidationErrors|null {
        return creditCardValidator(control);
      }

      static decimal(control: AbstractControl): ValidationErrors|null {
        return decimalValidator(control)
      }

      static equal(  control: AbstractControl,): ValidationErrors|null {
        return equalValidator(control)
      }

      static fileTypes(allowedTypes: string[]): ValidatorFn {
        return fileTypeValidator(allowedTypes);
      }

      static integer(control: AbstractControl): ValidationErrors|null {
        return integerValidator(control)
      }

      static number(control: AbstractControl): ValidationErrors|null {
        return numberValidator(control)
      }

      static phoneNumber(control: AbstractControl): ValidationErrors|null {
        return phoneNumberValidator(control)
      }

      static ipv4(control: AbstractControl): ValidationErrors|null {
        return ipv4Validator(control)
      }

      static ipv6(control: AbstractControl): ValidationErrors|null {
        return ipv6Validator(control)
      }

      static range(min: number, max: number): ValidationErrors|null {
        return rangeValidator(min, max);
      }

     static unique(values : any[]): ValidationErrors | null {
        return uniqueValidator(values)
      }

      static lowerCase(control: AbstractControl): ValidationErrors|null {
        return lowerCaseValidator(control);
      }

      static upperCase(control: AbstractControl): ValidationErrors|null {
        return upperCaseValidator(control);
      }

      static hexadecimalColor(withHash?: boolean): ValidatorFn {
        return hexadecimalColorValidator(withHash);
      }

      static url(control: AbstractControl): ValidationErrors|null {
        return urlValidator(control);
      }
}