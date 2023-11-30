import { ValidationErrors } from "@angular/forms";
import { notContainsValidator } from "./not-contains/not-contains.validator";

/**
 * @description
 * Provides a set of validators that can be used by from group
 *
 * A validator is a function that processes a `FormGroup` and returns an error map or null. 
 * A null map means that validation has passed.
 *
 *
 * @publicApi
 */
export class MultiversGroupValidators{ 
   
  static notContains(control: string, fields: string[] ): ValidationErrors|null {
    return notContainsValidator(control, fields);
  }

  


}