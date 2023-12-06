import {FormControl} from "@angular/forms";
import {MultiversControlValidators} from "../multivers-control-validators";

describe('FileTypeValidator', () => {
    let formControl: any;
    let file = new File([''], 'test.jpg', {type: 'image/jpg'});

    const invalidFiles = [
        //video
        new File([''], 'test.mp4', {type: 'video/mp4'}),
        //audio
        new File([''], 'test.mp3', {type: 'audio/mp3'}),
        //text
        new File([''], 'test.txt', {type: 'text/plain'}),
        //application
        new File([''], 'test.pdf', {type: 'application/pdf'}),
        //image
        new File([''], 'test.gif', {type: 'image/gif'}),
        ];

    beforeEach(() => {
        formControl = new FormControl('', [MultiversControlValidators.fileTypes(['image/jpg', 'image/png'])]);
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

    it('should be invalid with invalid files', () => {
        formControl.setValue(invalidFiles);
        expect(formControl.invalid).toBeTruthy();
    });

    it('should be invalid with file type', () => {
        formControl.setValue(file);
        expect(formControl.invalid).toBeFalsy();
    });

})