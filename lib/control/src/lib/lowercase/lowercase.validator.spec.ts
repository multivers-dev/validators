import {FormControl} from "@angular/forms";
import {MultiversControlValidators} from "../multivers-control-validators";

describe('LowercaseValidator', () => {
    let formControl: FormControl;

    beforeEach(() => {
        formControl = new FormControl('', [MultiversControlValidators.lowerCase]);
    });
    it('should create an instance', () => {
        expect(true).toBeTruthy();
    });

    it('should be invalid with number', () => {
        formControl.setValue(123);
        expect(formControl.invalid).toBeTruthy();
        expect(formControl.errors).toEqual({hasLowerCase: true});

    });

    it('should be invalid with string', () => {
        formControl.setValue('test');
        expect(formControl.invalid).toBeFalsy();
        expect(formControl.errors).toEqual(null);
    });

    it('should be have no errors with empty string', () => {
        expect(formControl.errors).toBeNull();
        expect(formControl.errors).toEqual(null);
    });
});

