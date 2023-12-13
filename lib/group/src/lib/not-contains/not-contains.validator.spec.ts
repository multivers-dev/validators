import { FormControl, FormGroup, Validators } from "@angular/forms";
import {MultiversGroupValidators} from "../multivers-group-validators";


describe('MultiversGroupValidators.notContains', () => {
  let form: FormGroup;
  beforeEach(() => {
    form  = new FormGroup({
        firstName : new FormControl('Pierre'),
        lastName : new FormControl('Nédélec'),
        email : new FormControl('pierre@doe.com'),
        password : new FormControl('PieRre24NédéLeC')
    })
  });



  it("if field to validate is invalid MultiversGroupValidators.notContains return no errors", () => {
    form.get('password')?.addValidators(Validators.minLength(99))
    form.get('password')?.updateValueAndValidity()
    expect(form.get('password')?.invalid).toBeTruthy();
    expect(form.get('password')?.hasError('minlength')).toBeTruthy();
    form.addValidators(MultiversGroupValidators.notContains('password', ['firstName','lastName']))
    form.updateValueAndValidity()
    expect(form.invalid).toBeTruthy();
    expect(form.hasError('notContains')).toBeFalsy();


  });

  it("['firstName','lastName'] validation form should be invalid and errors on notContains  ", () => {
    console.log(form.errors, form.invalid)
    form.addValidators(MultiversGroupValidators.notContains('password', ['firstName','lastName']))
    form.updateValueAndValidity();
    console.log(form.errors, form.invalid);
    expect(form.invalid).toBeTruthy();
    expect(form.hasError('notContains')).toBeTruthy();
  });

  it(" ['lastName'] validation form should be invalid and errors on notContains ", () => {
    form.addValidators(MultiversGroupValidators.notContains('password', ['lastName']))
    form.updateValueAndValidity()
    expect(form.invalid).toBeTruthy();
    expect(form.hasError('notContains')).toBeTruthy();

  });
  it(" ['lastName'] validation form should be valid and errors should return null ", () => {
    form.addValidators(MultiversGroupValidators.notContains('password', ['email']))
    form.updateValueAndValidity()
    expect(form.valid).toBeTruthy();
    expect(form.errors).toBeNull();
  });
  it("form not contains field to validate", () => {
    form.addValidators(MultiversGroupValidators.notContains('passworD', ['firstName','lastName']))
    form.updateValueAndValidity()
    expect(form.valid).toBeTruthy();
    expect(form.errors).toBeNull();
  });
  it("should not return errors if fields have no value", () => {
    form.get('lastName')?.setValue('')
    form.get('firstName')?.setValue('')
    form.addValidators(MultiversGroupValidators.notContains('password', ['lastName', 'firstName']))
    form.updateValueAndValidity()
    expect(form.valid).toBeTruthy();
    expect(form.errors).toBeNull();
  });

  it("MultiversGroupValidators.notContains should not be used for formControl and should console warn", () => {
    const spyObj = jest.spyOn(console, 'warn')
    const ctrl = new FormControl('', MultiversGroupValidators.notContains('', ['']))
    expect(spyObj).toHaveBeenCalledTimes(1);
    expect(ctrl.errors).toBeNull()
  });
});
