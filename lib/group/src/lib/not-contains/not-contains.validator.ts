import {
  ValidatorFn,
  AbstractControl,
  ValidationErrors,
  FormGroup,
  FormControl,
} from '@angular/forms';

/**
 *
 * @description
 * Validator for FormGroup that requires a string representing one of the FormControl's name
 * to verified that it doesn't contains same value of others fields ( passed as second parameters , array of string)
 *
 * @param toValidateField string of formControl to validate
 * @param fields array of string representing formControls
 * @usageNotes
 *
 * ### Validate that the field password doesn't contains firstName or/and lastName
 *
 * ```typescript
 * const group = new FormGroup({
 *    firstName : new FormControl(''),
 *    lastName : new FormControl('multivers')
 *    password : new FormControl('multivers')
 * }, MultiversValidators.notContains('password', ['firstName', 'lastName']));
 *
 * console.log(group.errors); // {notcontains: 'password must not contains lastName'}
 * ```
 *
 * @returns A validator function that returns an error with the
 * `notcontains` property if the validation check fails, otherwise `null`.
 *
 */
export const notContainsValidator = (
  toValidateField: string,
  fields: string[] 
): ValidatorFn => {
  return (group: AbstractControl): ValidationErrors | null => {
    if (!(group instanceof FormGroup)) {
      console.warn(
        '[notContainsValidator] should be use as FormGroup Validator'
      );
      return null;
    }
    const toValidateControl = group.get(toValidateField) as FormControl<string>;
    if (!toValidateControl || toValidateControl.invalid) {
      return null;
    }

    const substrings: { value: string; field: string }[] = [];

    fields.forEach((field) => {
      if (group.contains(field)) {
        const value = group.get(field)?.value;
        if (value) {
          substrings.push({ value, field });
        }
      }
    });

    if (substrings.length === 0) {
      return null;
    }

    const foundFields = substrings
      .filter(
        ({ value, field }) =>
          toValidateControl.value.toUpperCase().includes(value.toUpperCase()) ||
          toValidateControl.value.toLowerCase().includes(value.toLowerCase()) ||
          toValidateControl.value.includes(value)
      )
      .map(({ field }) => field);
    const error = { notContains:  `${toValidateField} must not contains ${foundFields.join(', ')}` };
    return foundFields.length > 0
      ?  error
      : null;
  };
};
