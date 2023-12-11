# @multivers/validators/group

Secondary entry point of `@multivers/validators`. It can be used by importing `MultiversGroupValidator` from `@multivers/validators/group`.

## Table of Contents

- [Usage](#usage)
- [Validators](#validators)

## Usage
- Import the `MultiversGroupValidator` module into your Angular module:
    
  ```typescript
    import { MultiversGroupValidator } from 'multivers-validators';
   ```

  ```typescript
        const formGroup = new FormGroup({
         firstField: new FormControl(''),
         secondField: new FormControl(''),
         thirdField: new FormControl(''),
         fourthField: new FormControl(''),
         }, [someValidatorOfThisLibrary, anotherValidatorOfThisLibrary, ...]);
  ```




## Validators

Below is a list of custom validators included in this library.

| Validator             | Description                                                                                                                                                                                                 |
|-----------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `date-range`          | Validator for FormGroup that checks if the start date is before or equal to the end date. Params `startFieldName` , `endFieldName`                                                                          |
| `is-different`        | Validator for FormGroup that checks if the fiels are different. Params `firstField` `secondField`                                                                                                           |
| `is-equal`            | Validator for FormGroup that checks if the fiels are equal. Params `firstField` `secondField`                                                                                                               |
| `not-contains`        | Validator for FormGroup that requires a string representing one of the FormControl's name to verified that it doesn't contains same value of others fields ( passed as second parameters , array of string) |
| `required-some`       | Validator for FormGroup that checks if the list of the field have the number of required, Params `fieldList`, `numberRequired`                                                                              |
| `required-one-of-two` | Validator for FormGroup that checks if one of the two fields is required. It takes the name of the two fields as parameters.                                                                                |

