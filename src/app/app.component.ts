import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
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
    firstName : new FormControl('', [ MultiversControlValidators.lowerCase, MultiversControlValidators.upperCase ] ),
    lastName : new FormControl(''),
    password: new FormControl('')
  }, 
  MultiversGroupValidators.notContains('password', ['firstName'])
  )

  get firstName(){
    return this.formGroup.controls.firstName
  }
}
