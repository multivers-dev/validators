import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";
import { lowerCaseValidator } from "./lowercase/lowercase.validator";
import { upperCaseValidator } from "./uppercase/uppercase.validator";
import { hexadecimalColorValidator } from "./hexadecimal-color/hexadecimal-color.validator";

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
   
  
  static lowerCase(control: AbstractControl): ValidationErrors|null {
    return lowerCaseValidator(control);
  }

  static upperCase(control: AbstractControl): ValidationErrors|null {
    return upperCaseValidator(control);
  }

  static hexadecimalColor(withHash?: boolean): ValidatorFn {
    return hexadecimalColorValidator(withHash);
  }
  
  


}