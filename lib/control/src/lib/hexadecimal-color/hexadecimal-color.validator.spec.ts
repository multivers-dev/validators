import { FormControl} from "@angular/forms";
import { MultiversControlValidators } from "../multivers-control-validators";


describe('notContainsValidator', () => {
  let color: FormControl<string | null>;
  beforeEach(() => {
    color = new FormControl('', MultiversControlValidators.hexadecimalColor())
  });



  it("color formControl should be invalid with empty string", () => {
    expect(color.invalid).toBeTruthy();
  });

  it("color formControl should be valid with codes", () => {
    const codes = ["#abc", "#ABC", "#000", "#FFF", "#000000", "#FF0000", "#00FF00", "#0000FF", "#FFFFFF"]
    codes.forEach( code => {
      color.setValue(code)
      expect(color.invalid).toBeFalsy();
    })
  
  });

  it("color formControl should be valid if validator have withHash paremeter off", () => {
    
    color.setValidators(MultiversControlValidators.hexadecimalColor(false))
    color.setValue("1AFFa1")
    expect(color.invalid).toBeFalsy();
  });





});
