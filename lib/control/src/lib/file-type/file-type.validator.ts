import { AbstractControl, ValidationErrors } from "@angular/forms";

/**
 * fileTypeValidator
 * Validates that the value is a file with an allowed file type.
 *
 *  @param allowedTypes - The allowed file types.
 *  @returns ValidationErrors or null if the validation passes.
 */
export const fileTypeValidator = (allowedTypes: string[]) => (control: AbstractControl): ValidationErrors | null => {
    const file : File[] | File = control.value;
    if (!file) {
        return null;
    }
    const fileArray = Array.isArray(file) ? file : [file];
    const valid = fileArray.every((f) => {
        const type = f.type;
        return allowedTypes.includes(type);
    });
    return valid ? null : { fileType: true };
};
