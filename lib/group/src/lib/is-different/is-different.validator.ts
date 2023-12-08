import { AbstractControl, ValidationErrors, FormGroup, FormControl } from '@angular/forms';

/**
 * @description
 * Validator for FormGroup that checks if the fiels have different value.
 *
 *
 * @returns A validator function that returns an error with the `different` property if the validation check fails, otherwise `null`.
 * @param fiels - The list of fields to compare.
 */
export const isDifferentValidator = (fiels: string[]) => (group: AbstractControl): ValidationErrors | null => {
    if (!(group instanceof FormGroup)) {
        console.warn('[differentValidator] should be used as FormGroup Validator');
        return null;
    }

   for (let i = 0; i < fiels.length; i++) {
      const field = group.get(fiels[i]) as FormControl<any>;
      if (!field || field.invalid) {
         return null;
      }
      const fieldValue = field.value;
      for (let j = i + 1; j < fiels.length; j++) {
         const fieldToCompare = group.get(fiels[j]) as FormControl<any>;
         if (!fieldToCompare || fieldToCompare.invalid) {
            return null;
         }
         const fieldToCompareValue = fieldToCompare.value;
         if (fieldValue === fieldToCompareValue) {
            return { different: true };
         }
      }
   }
    return null;
};
