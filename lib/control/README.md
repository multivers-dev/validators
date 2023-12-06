# @multivers/validators/control

This library contains custom validators for Angular Reactive Forms.


## Table of Contents

- [Usage](#usage)
- [Validators](#validators)

## Usage

To use this library, install it via npm:

```bash
npm install multivers-validators
```

Then import the `MultiversControlValidator` module into your Angular module:

```typescript
import { MultiversControlValidator } from 'multivers-validators';
```

Finally, add the `MultiversControlValidator` module to the `imports` array of your Angular module:

```typescript
@NgModule({
  imports: [
    MultiversControlValidator
  ]
})
export class AppModule { }
```

## Validators

Below is a list of custom validators included in this library.

| Validator     | Description                                                                                                                                                              |
|---------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `credit-card` | The `credit-card` validator checks if the input is a valid credit card number. It uses the Luhn algorithm to validate the number.                                        |
| `date`        | The `date` validator checks if the input is a valid date. It supports both ISO 8601 and non-ISO 8601 formats.                                                            |
| `decimal`     | The `decimal` validator checks if the input is a valid decimal number. It allows both integer and fractional numbers.                                                    |
| `equal`       | The `equal` validator checks if the input is equal to a specified value. It is useful for confirming passwords or other inputs that need to match.                       |
| `file`        | The `file` validator checks if the input is a valid file object. It can be used to validate file inputs in forms.                                                        |
| `hexadecimal` | The `hexadecimal` validator checks if the input is a valid hexadecimal number. It allows both uppercase and lowercase letters from A to F as well as digits from 0 to 9. |
| `integer`     | The `integer` validator checks if the input is a valid integer. It does not allow fractional numbers.                                                                    |
| `ip-address`  | The `ip-address` validator checks if the input is a valid IP address. It supports both IPv4 and IPv6 formats.                                                            |
| `lowercase`   | The `lowercase` validator checks if the input is a string that contains only lowercase letters.                                                                          |
| `number`      | The `number` validator checks if the input is a valid number. It allows both integer and decimal numbers.                                                                |
| `phone`       | The `phone` validator checks if the input is a valid phone number. It supports both international and local formats.                                                     |
| `range`       | The `range` validator checks if the input is a number that falls within a specified range. It is useful for checking if a number is within a minimum and maximum value.  |
| `unique`      | The `unique` validator checks if the input is unique within a specified array or set of values. It is useful for checking if a username or email is already taken.       |
| `uppercase`   | The `uppercase` validator checks if the input is a string that contains only uppercase letters.                                                                          |
| `url`         | The `url` validator checks if the input is a valid URL. It supports both http and https protocols.                                                                       |

s
