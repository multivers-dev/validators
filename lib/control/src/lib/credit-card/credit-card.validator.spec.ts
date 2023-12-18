import {MultiversControlValidators} from "../multivers-control-validators";
import {FormControl} from "@angular/forms";

describe('creditCardValidator', () => {
    let formControl : FormControl<string | null>;
    const invalidCreditCards = [
        "1234567890123456",
        "12345678901234567",
        "123456789012345",
        "123456789012345",
        "123456789012345",
    ];
    const validCreditCards = [
        "378282246310005", // American Express
        "371449635398431", // American Express
        "378734493671000", // American Express Corporate
        "5610591081018250", // Australian BankCard
        "30569309025904", // Diners Club
        "38520000023237", // Diners Club
        "6011111111111117", // Discover
        "6011000990139424", // Discover
        "3530111333300000", // JCB
        "3566002020360505", // JCB
        "5555555555554444", // MasterCard
        "5105105105105100", // MasterCard
        "4111111111111111", // Visa
        "4012888888881881", // Visa
        "4222222222222", // Visa
        // "76009244561", // Dankort (PBS)
        "5019717010103742", // Dankort (PBS)
        "6331101999990016" // Switch/Solo (Paymentech)
    ];

    beforeEach(() => {
        formControl = new FormControl('', MultiversControlValidators.creditCard);
    });

    it('should create an instance', () => {
        expect(true).toBeTruthy();
    });

    it("should be invalid with empty string", () => {
        expect(formControl.invalid).toBeFalsy()
        expect(formControl.errors).toEqual(null);
    });

    it("should be invalid with null", () => {
        formControl.setValue(null)
        expect(formControl.invalid).toBeFalsy()
        expect(formControl.errors).toEqual(null);
    });


    it("should be invalid with string", () => {
        formControl.setValue("test")
        expect(formControl.invalid).toBeTruthy();
        expect(formControl.errors).toEqual({ creditCard: true });
    });

    it("should be invalid with number", () => {
        invalidCreditCards.forEach( (card: string | null) => {
            formControl.setValue(card)
            expect(formControl.invalid).toBeTruthy();
            expect(formControl.errors).toEqual({ creditCard: true });
        })
    });

    it("should be valid with number", () => {
        validCreditCards.forEach( (card: string | null) => {
            formControl.setValue(card)
            expect(formControl.invalid).toBeFalsy();
            expect(formControl.errors).toEqual(null);
        })
    });

    it('should has not hex', () => {
        
    });
});