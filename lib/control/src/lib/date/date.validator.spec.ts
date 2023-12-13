import {FormControl} from "@angular/forms";
import {MultiversControlValidators} from "../multivers-control-validators";

describe('dateValidator', () => {
    let formControl: FormControl<any>;
    beforeEach(() => {
        formControl = new FormControl('', MultiversControlValidators.date({}));
    });

    it("should be invalid with empty string", () => {
        expect(formControl.errors).toBeNull();
    });

    it("should be invalid with string", () => {
        formControl.setValue("test")
        expect(formControl.errors).toBeNull();
    });

    it("should be invalid with number", () => {
        formControl.setValue(123)
        expect(formControl.errors).toBeNull();
    });

    it("should be invalid with number", () => {
        formControl.setValue(null)
        expect(formControl.errors).toBeNull();
    });

    it("should be valid with date", () => {
        formControl.setValue(new Date())
        expect(formControl.invalid).toBeFalsy();
    });

    it("should be invalid with date value less than the min", () => {
        formControl.addValidators(MultiversControlValidators.date({min: new Date(2000, 1, 1)}))
        formControl.setValue(new Date(1999, 1, 1))
        formControl.updateValueAndValidity();
        expect(formControl.invalid).toBeTruthy();
        expect(formControl.errors).toEqual({minDate: true});
    });

    it("should be invalid with date value greater than the max", () => {
        formControl.addValidators(MultiversControlValidators.date({max: new Date(2000, 1, 1)}))
        formControl.setValue(new Date(2001, 1, 1))
        formControl.updateValueAndValidity();

        expect(formControl.invalid).toBeTruthy();
        expect(formControl.errors).toEqual({maxDate: true});

    });

});