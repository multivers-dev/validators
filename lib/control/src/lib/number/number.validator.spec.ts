import {FormControl} from "@angular/forms";
import {MultiversControlValidators} from "../multivers-control-validators";

describe("NumberValidator", () => {
    let formControl: FormControl;

    beforeEach(() => {
        formControl = new FormControl('', [MultiversControlValidators.number]);
    });
    it("should be invalid with string", () => {
        formControl.setValue("test");
        expect(formControl.invalid).toBeTruthy();
    });

    it("should be invalid with empty string", () => {
        expect(formControl.invalid).toBeTruthy();
    });

    it("should be valid with number", () => {
        formControl.setValue(123);
        expect(formControl.invalid).toBeFalsy();
    });

    it("should be valid with negative number", () => {
        formControl.setValue(-123);
        expect(formControl.invalid).toBeFalsy();
    });

});