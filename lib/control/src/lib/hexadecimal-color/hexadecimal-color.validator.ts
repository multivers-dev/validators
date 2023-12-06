import { AbstractControl, ValidatorFn } from "@angular/forms";

/**
 * The valid hexadecimal color code must satisfy the following conditions. 

It should start from ‘#’ symbol. ( withHash boolean )
It should be followed by the letters from a-f, A-F and/or digits from 0-9.
The length of the hexadecimal color code should be either 6 or 3, excluding ‘#’ symbol.
 * hexadecimalColorValidator
 * @param withHash - The condition to evaluate.
 *  @returns ValidationErrors or null if the validation passes.
 */
export const hexadecimalColorValidator = (withHash = true): ValidatorFn => {
  return (control: AbstractControl) => {
    const value = control.value;
    if (!value) {
      return { ishexadecimalColor: false };
    }
    const hash = withHash ? '#': '';
    const regexp = RegExp(`^${hash}([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$`)
    const hashexadecimalColor = regexp.test(value);
    if (!hashexadecimalColor){
      return { ishexadecimalColor: false }
    }
    return null;
  } 
 
  };

