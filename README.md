<a name="readme-top"></a>

[//]: # ([![Contributors][contributors-shield]][contributors-url])

[//]: # ([![Forks][forks-shield]][forks-url])

[//]: # ([![Stargazers][stars-shield]][stars-url])

[//]: # ([![Issues][issues-shield]][issues-url])

[//]: # ([![MIT License][license-shield]][license-url])

[//]: # ([![LinkedIn][linkedin-shield]][linkedin-url])



<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://github.com/multivers-dev/validators">
    <img src="src/assets/images/logo.png" alt="Logo" width="320" height="71">
  </a>

<h3 align="center">Multivers Validators</h3>

  <p align="center">
    A collection of validators for Angular Reactive Forms. This library is dependent on Angular and RxJS only.
    <br /> <br/>
    <a href="https://github.com/multivers-dev/validators"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="https://github.com/multivers-dev/validators">View Demo</a>
    ·
    <a href="https://github.com/multivers-dev/validators/issues">Report Bug</a>
    ·
    <a href="https://github.com/multivers-dev/validators/issues">Request Feature</a>
  </p>

</div>



<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li><a href="#about-the-project">About The Project</a></li>
    <li><a href="#installation">Installation</a></li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgments">Acknowledgments</a></li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->

## About The Project

[![Product Name Screen Shot][product-screenshot]](https://example.com)

There are many great validators available on GitHub, however, I didn't find one that really suit my needs so I created
this enhanced one. I want to create a validator that anyone can use to validate their Angular Reactive Forms.

Here's why:

* Your time should be focused on creating something amazing. A project that solves a problem and helps others
* You shouldn't be doing the same tasks over and over like creating a validator from scratch
* You should element DRY principles to the rest of your life :smile:
* You should be able to validate your forms with ease



<p align="right">(<a href="#readme-top">back to top</a>)</p>


<!-- Installation -->

## Installation

_Below is how to install the library and use it in your project._

1. Install the library

```sh npm
   npm install @multivers/validators
```

```shell
  yarn add @multivers/validators
```

```shell
  pnpm add @multivers/validators
```


Import the `MultiversControlValidator` or  `MultiversGroupValidator`lib into your component: 


```typescript
import { MultiversControlValidator } from 'multivers-validators';
import { MultiversGroupValidator } from 'multivers-validators';
```

Then, add the validators to your form controls:

```typescript
 this.formGroup =  new FormGroup({
  //Personal Details
  firstName: new FormControl('', []),
  lastName: new FormControl('', Validators.compose([ MultiversControlValidators.lowerCase, MultiversControlValidators.upperCase])),
  birthDate: new FormControl('', Validators.compose([
    Validators.required,
    MultiversControlValidators.date({min: new Date(1990, 0, 1), max:  new Date(2000, 0, 1)}),
  ]),
  )}, {
  validators: [
    MultiversGroupValidators.notContains('password', ['firstName', 'lastName']),
    MultiversGroupValidators.requiredSome(['firstName', 'lastName'], 1),
    MultiversGroupValidators.dateRange('issueDate', 'expiryDate'),
    MultiversGroupValidators.isDifferent('firstName', 'lastName'),
    MultiversGroupValidators.isEquals('password', 'confirmPassword'),
  ]
});
```



<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- USAGE EXAMPLES -->

## Usage

_Please refer to the [Documentation](https://example.com)_
### Available Validator Rules
All validators are written as `camelCase` functions. The following table lists all available validators and their
arguments.

###  Control Validators

_See the Control Validators [Documentation](lib/control/README.md)_

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

### Group Validators

_See the Group Validators [Documentation](lib/group/README.md)_

| Group Validator                                                        | Description                                                                                                                                                                                                 |
|------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `date-range`: `(startFieldName: string,endFieldName: string )`         | Validator for FormGroup that checks if the start date is before or equal to the end date. Params `startFieldName` , `endFieldName`                                                                          |
| `is-different`: `(firstField: string, secondField: string)`            | Validator for FormGroup that checks if the fiels are different. Params `firstField` `secondField`                                                                                                           |
| `is-equal`:  `(firstField: string, secondField: string)`               | Validator for FormGroup that checks if the fiels are equal. Params `firstField` `secondField`                                                                                                               |
| `not-contains`: `toValidateField: string,fields: string[] `            | Validator for FormGroup that requires a string representing one of the FormControl's name to verified that it doesn't contains same value of others fields ( passed as second parameters , array of string) |
| `required-some`: `(fieldNameList : string[], numberRequired:number=1)` | Validator for FormGroup that checks if the list of the field have the number of required, Params `fieldNameList`, `numberRequired`                                                                          |



<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- ROADMAP -->

## Roadmap

- [x] Add Changelog
- [x] Add back to top links
- [x] Add a lib for forms controls
- [x] Add a lib for forms group validators
- [ ] Add Github pages for documentation
- [ ] Multi-language Support
    - [ ] French
  

See the [open issues](https://github.com/multivers-dev/validators/issues) for a full list of proposed features (and
known issues).

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- CONTRIBUTING -->

## Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any
contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also
simply open an issue with the tag "enhancement".
Don't forget to give the project a star! Thanks again!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- LICENSE -->

## License

Distributed under the MIT License. See `LICENSE.txt` for more information.

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- CONTACT -->

## Contact

Pierre Nédélec - [@your_twitter](https://twitter.com/your_username) - contact@multivers.dev

Project Link: [https://github.com/multivers-dev/validators](https://github.com/multivers-dev/validators)

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- ACKNOWLEDGMENTS -->

## Acknowledgments

* [Angular](https://angular.io/)
* [Nx Workspace](https://nx.dev/)
* [Jest](https://jestjs.io/)
* [TypeScript](https://www.typescriptlang.org/)


<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->

[contributors-shield]: https://img.shields.io/github/contributors/othneildrew/Best-README-Template.svg?style=for-the-badge

[contributors-url]: https://github.com/multivers-dev/validators/graphs/contributors

[forks-shield]: https://img.shields.io/github/forks/othneildrew/Best-README-Template.svg?style=for-the-badge

[forks-url]: https://github.com/multivers-dev/validators/network/members

[stars-shield]: https://img.shields.io/github/stars/othneildrew/Best-README-Template.svg?style=for-the-badge

[stars-url]: https://github.com/multivers-dev/validators/stargazers

[issues-shield]: https://img.shields.io/github/issues/othneildrew/Best-README-Template.svg?style=for-the-badge

[issues-url]: https://github.com/multivers-dev/validators/issues

[license-shield]: https://img.shields.io/github/license/othneildrew/Best-README-Template.svg?style=for-the-badge

[license-url]: https://github.com/multivers-dev/validators/blob/master/LICENSE.txt

[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555

[linkedin-url]: https://www.linkedin.com/company/multivers-dev/

[product-screenshot]: src/assets/images/screenshot.png