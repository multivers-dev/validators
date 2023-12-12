import {CommonModule} from '@angular/common';
import {Component} from '@angular/core';
import {AbstractControl, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators} from '@angular/forms';
import {MultiversControlValidators, MultiversGroupValidators} from '@multivers/validators';
import {rangeValidator} from "../../lib/control/src/lib/range/range-validator";


@Component({
    standalone: true,
    imports: [CommonModule, FormsModule, ReactiveFormsModule],
    selector: 'multivers-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
})
export class AppComponent {
    formGroup: FormGroup ;

    constructor() {
       this.formGroup =  new FormGroup({
            //Personal Details
            firstName: new FormControl('', []),
            lastName: new FormControl('', Validators.compose([ MultiversControlValidators.lowerCase, MultiversControlValidators.upperCase])),
            birthDate: new FormControl('', Validators.compose([
                Validators.required,
                MultiversControlValidators.date(
                    new Date(1990, 0, 1),
                    new Date(2000, 0, 1)
                    ),
            ])),
            email: new FormControl('', Validators.compose([Validators.required, Validators.email])),
            phoneNumber: new FormControl('', [MultiversControlValidators.phoneNumber]),
            gender: new FormControl('', [Validators.required]),
            website: new FormControl('', [MultiversControlValidators.url]),
           //Account Details
           password: new FormControl('', [MultiversControlValidators.lowerCase, MultiversControlValidators.upperCase]),
           confirmPassword: new FormControl('', [MultiversControlValidators.lowerCase, MultiversControlValidators.upperCase]),

           //Identity Details
            idType: new FormControl('', [Validators.required]),
            idNumber: new FormControl('', [Validators.required]),
            issuedAuthority: new FormControl('', [Validators.required]),
            issueState: new FormControl('', [Validators.required]),
            issueDate: new FormControl('', [Validators.required]),
            expiryDate: new FormControl('', [Validators.required]),

          //payment Details
            accountNumber: new FormControl('', [MultiversControlValidators.creditCard]),
            expirationDate: new FormControl('', [Validators.required]),
            cvv: new FormControl('', [
                Validators.required,
                rangeValidator(100, 9999),
                ] ),
        }, {
            validators: [
                MultiversGroupValidators.notContains('password', ['firstName', 'lastName']),
                MultiversGroupValidators.requiredSome(['firstName', 'lastName'], 1),
                MultiversGroupValidators.dateRange('issueDate', 'expiryDate'),
                MultiversGroupValidators.isDifferent('firstName', 'lastName'),
                MultiversGroupValidators.isEquals('password', 'confirmPassword'),
            ]
        });
    }


    submitForm() {
        console.log(this.formGroup.value)
    }

    getErrorMessage(controlName: string, errorName: string | string[]) :boolean {
        const control: AbstractControl<any> = this.formGroup.controls[controlName];

       const listError = Array.isArray(errorName) ? errorName : [errorName];

        if (control && control.errors) {
            for (const error of listError) {
                if(control.hasError(error) && (control.dirty || control.touched)) {
                    return control.getError(error) ?? true;
                }
            }
        }


        return false;
    }

    invalidField(controlName: string) {
        const control: AbstractControl<any> = this.formGroup.controls[controlName] ;
        return control.invalid && (control.dirty || control.touched) && control.errors ? 'invalid' : 'valid';
    }

    errorMessages = {
        required: 'This field is required',
        email: 'Enter a valid email address',
        phoneNumber: 'Enter a valid phone number',
        url: 'Enter a valid url',
        creditCard: 'Enter a valid credit card number',
        fileTypes: 'Enter a valid file type',
        hasLowerCase: 'Enter a valid lower case',
        hasUpperCase: 'Enter a valid upper case',
        date: 'Enter a valid date',
        notContains: 'Enter a valid value',
        notContainsField: 'Enter a valid value',
    }


}
