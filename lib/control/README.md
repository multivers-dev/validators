# @multivers/validators/control

This library contains custom validators for Angular Reactive Forms.


## Table of Contents

- [Usage](#usage)
- [Validators](#validators)

## Usage

Import the `MultiversControlValidator` module into your Angular module:

```typescript
import { MultiversControlValidator } from 'multivers-validators';
```

Then, add the validators to your form controls:

```typescript
formGroup = new FormGroup({
  firstField: new FormControl('', [someValidatorOfThisLibrary, anotherValidatorOfThisLibrary, ...]),
  secondField: new FormControl('', [someValidatorOfThisLibrary, anotherValidatorOfThisLibrary, ...]),
  thirdField: new FormControl('', [someValidatorOfThisLibrary, anotherValidatorOfThisLibrary, ...]),
  fourthField: new FormControl('', [someValidatorOfThisLibrary, anotherValidatorOfThisLibrary, ...]),
});
```

## Validators

Below is a list of custom validators included in this library.


| Control Validator                                    | Description                                                                                                                                                        |
|------------------------------------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `credit-card`                                        | The `credit-card` validator checks if the input is a valid credit card number. It uses `the Luhn algorithm` to validate the number.                                |
| `date`: `(min:Date\|null=null, max:Date\|null=null)` | The `date` validator checks if the input is a valid date. It supports both ISO 8601 and non-ISO 8601 formats.                                                      |
| `decimal`                                            | The `decimal` validator checks if the input is a valid decimal number. It allows both integer and fractional numbers.                                              |
| `equal`: `(compareControl: AbstractControl) `        | The `equal` Validates that the value is equal to the value of the `compareControl`.                                                                                |
| `file-type`: `(allowedTypes: string[])`              | The `file` validator checks if the input is a valid file object. It can be used to validate file inputs in forms.                                                  |
| `hexadecimalColor`:`(withHash = true)`               | The `hexadecimalColor` validator checks if the input is a valid hexadecimal color.                                                                                 |
| `integer`                                            | The `integer` validator checks if the input is a valid integer. It does not allow fractional numbers.                                                              |
| `ip-address`                                         | The `ip-address` validator checks if the input is a valid IP address. It supports both IPv4 and IPv6 formats.                                                      |
| `lowercase`                                          | The `lowercase` validator checks if the input is a string that contains only lowercase letters.                                                                    |
| `number`                                             | The `number` validator checks if the input is a valid number. It allows both integer and decimal numbers.                                                          |
| `phone`                                              | The `phone` validator checks if the input is a valid phone number. It supports both international and local formats.                                               |
| `range`: `(min: number, max: number)`                | The `range` validator checks if the input is a number that falls within a specified range.                                                                         |
| `unique`: `existingValues`                           | The `unique` validator checks if the input is unique within a specified array or set of values. It is useful for checking if a username or email is already taken. |
| `uppercase`                                          | The `uppercase` validator checks if the input is a string that contains only uppercase letters.                                                                    |
| `url`                                                | The `url` validator checks if the input is a valid URL. It supports both http and https protocols.                                                                 |

