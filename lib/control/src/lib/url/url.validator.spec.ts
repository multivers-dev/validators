import {FormControl} from "@angular/forms";
import {MultiversControlValidators} from "../multivers-control-validators";

describe('UrlValidator', () => {
    let formControl: FormControl<string | null>;
    beforeEach(() => {
         formControl = new FormControl(null, [MultiversControlValidators.url]);
    });
    it('should create an instance', () => {
        expect(true).toBeTruthy();
    });

    it('should be invalid with string', () => {
        formControl.setValue('test');
        expect(formControl.invalid).toBeTruthy();
    });

    it('should be valid', () => {
        formControl.setValue('https://www.google.com');
        expect(formControl.invalid).toBeFalsy();
        expect(formControl.errors).toEqual(null);
    });

    it('should be have  errors with empty string', () => {
        expect(formControl.errors).toEqual({url: true});
        expect(formControl.invalid).toBeTruthy();
    });

});