import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators} from '@angular/forms';
import { MultiversControlValidators, MultiversGroupValidators } from '@multivers/validators';


@Component({
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  selector: 'multivers-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  formGroup = new FormGroup({
    firstName : new FormControl('',  [ MultiversControlValidators.lowerCase, MultiversControlValidators.upperCase ] ),
    lastName : new FormControl('', [  ] ),
    password: new FormControl('', [ MultiversControlValidators.lowerCase, MultiversControlValidators.upperCase ]),
    confirmPassword: new FormControl('', []),
    birthDate: new FormControl('', [MultiversControlValidators.date]),
    email: new FormControl('', [Validators.email]),
    creditCard: new FormControl('', [MultiversControlValidators.creditCard]),
    photo: new FormControl('', [MultiversControlValidators.fileTypes(['images/png'])]),
    website: new FormControl('', [MultiversControlValidators.url]),
    phoneNumber: new FormControl('', [MultiversControlValidators.phoneNumber]),
  }, 
  MultiversGroupValidators.notContains('password', ['firstName'])
  )

  get firstName(){
    return this.formGroup.controls.firstName
  }

    get lastName(){
        return this.formGroup.controls.lastName
    }

    get password(){
        return this.formGroup.controls.password
    }

    get confirmPassword(){
        return this.formGroup.controls.confirmPassword
    }

    get birthDate(){
        return this.formGroup.controls.birthDate
    }

    get email(){
        return this.formGroup.controls.email
    }

    get creditCard(){
        return this.formGroup.controls.creditCard
    }

    get photo(){
        return this.formGroup.controls.photo
    }

    get website(){
        return this.formGroup.controls.website
    }

    get phoneNumber(){
        return this.formGroup.controls.phoneNumber
    }

    get formGroupErrors(){
      return this.formGroup.errors
    }


}
