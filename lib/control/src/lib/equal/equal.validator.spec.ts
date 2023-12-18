import {MultiversControlValidators} from "../multivers-control-validators";
import {FormControl} from "@angular/forms";

describe('equalValidator', () => {
    let formControl: any;
    let compareControl: any;

    beforeEach(() => {
        compareControl = new FormControl(8);
        formControl = new FormControl('', MultiversControlValidators.equal(compareControl));

    });


    it('should create an instance', () => {
        expect(true).toBeTruthy();
    });

    it('should be invalid with empty string', () => {
        expect(formControl.invalid).toBeTruthy();
    });

    it('should be invalid with string', () => {
        formControl.setValue('test');
        expect(formControl.invalid).toBeTruthy();
    });

    it('should be invalid with number', () => {
        formControl.setValue(123);
        expect(formControl.invalid).toBeTruthy();
    });

    it('should be invalid with number', () => {
        formControl.setValue(8);
        expect(formControl.invalid).toBeFalsy();
    });


});