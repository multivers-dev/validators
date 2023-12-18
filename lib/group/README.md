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

| Group Validator                                                                                 | Description                                                                                                                                                                                                 |
|-------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| [`date-range`: `(startFieldName: string,endFieldName: string )`](src/lib/date-range)            | Validator for FormGroup that checks if the start date is before or equal to the end date. Params `startFieldName` , `endFieldName`                                                                          |
| [`is-different`: `(firstField: string, secondField: string)`](src/lib/is-different)             | Validator for FormGroup that checks if the fiels are different. Params `firstField` `secondField`                                                                                                           |
| [`is-equal`:  `(firstField: string, secondField: string)`](src/lib/is-equal)                    | Validator for FormGroup that checks if the fiels are equal. Params `firstField` `secondField`                                                                                                               |
| [`not-contains`: `toValidateField: string,fields: string[]`](src/lib/not-contains)              | Validator for FormGroup that requires a string representing one of the FormControl's name to verified that it doesn't contains same value of others fields ( passed as second parameters , array of string) |
| [`required-some`: `(fieldNameList : string[], numberRequired:number=1)`](src/lib/required-some) | Validator for FormGroup that checks if the list of the field have the number of required, Params `fieldNameList`, `numberRequired`                                                                          |

