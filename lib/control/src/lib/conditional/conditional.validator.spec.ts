import {FormControl} from "@angular/forms";
import {MultiversControlValidators} from "../multivers-control-validators";

describe('ConditionalValidator', () => {
    let formControl: FormControl;

    beforeEach(() => {
        formControl = new FormControl('', [MultiversControlValidators.conditional()]);
    });
    it('should create an instance', () => {
        expect(true).toBeTruthy();
    });

    it('should be invalid with number', () => {
        formControl.setValue(123);
        expect(formControl.invalid).toBeTruthy();
    });

    it('should be invalid with string', () => {
        formControl.setValue('test');
        expect(formControl.invalid).toBeTruthy();
    });

    it('should be invalid with empty string', () => {
        expect(formControl.invalid).toBeTruthy();
    });


});