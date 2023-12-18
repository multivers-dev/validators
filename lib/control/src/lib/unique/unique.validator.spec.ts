import {FormControl} from "@angular/forms";
import {MultiversControlValidators} from "../multivers-control-validators";
describe('UniqueValidator', () => {

    let formControl: FormControl<any>;

    beforeEach(() => {
        formControl = new FormControl('', [MultiversControlValidators.unique(['test'])]);
    });

    it('should be invalid with existing value', () => {
        expect(formControl.errors).toEqual(null);
        formControl.setValue('test');
        expect(formControl.invalid).toBeTruthy();
        expect(formControl.errors).toEqual({unique: true});
    });

    it('should be valid with non existing value', () => {
        formControl.setValue('test2');
        expect(formControl.invalid).toBeFalsy();
        expect(formControl.errors).toEqual(null);
    });

    it('should be valid with empty string', () => {
        expect(formControl.invalid).toBeFalsy();
    });

});