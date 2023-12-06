import {FormControl} from "@angular/forms";
import {MultiversControlValidators} from "../multivers-control-validators";

describe('dateValidator', () => {
    let formControl : FormControl<any>;
    beforeEach(() => {
        formControl = new FormControl('',MultiversControlValidators.date);
    });

    it("should be invalid with empty string", () => {
        expect(formControl.invalid).toBeTruthy();
    });

    it("should be invalid with string", () => {
        formControl.setValue("test")
        expect(formControl.invalid).toBeTruthy();
    });

    it("should be invalid with number", () => {
        formControl.setValue(123)
        expect(formControl.invalid).toBeTruthy();
    });

    it("should be invalid with number", () => {
        formControl.setValue(null)
        expect(formControl.invalid).toBeTruthy();
    });

    it("should be valid with date", () => {
        formControl.setValue(new Date())
        expect(formControl.invalid).toBeFalsy();
    });

});