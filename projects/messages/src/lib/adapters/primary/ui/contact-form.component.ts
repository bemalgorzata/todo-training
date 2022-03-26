import { FormGroup, FormControl } from '@angular/forms';
import { Component, ViewEncapsulation, ChangeDetectionStrategy, Inject } from '@angular/core';
import { ADDS_MESSAGE_DTO, AddsMessageDtoPort } from '../../../application/ports/secondary/adds-message.dto-port';

@Component({
    selector: 'lib-contact-form',
    templateUrl: './contact-form.component.html',
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ContactFormComponent {
    contact = "Hello contact!";

    onClick() {
        this.contact = "Cześć!"
    };

    readonly messageForm: FormGroup = new FormGroup({
        name: new FormControl(),
        email: new FormControl(),
        text: new FormControl(),

    });


    constructor(@Inject(ADDS_MESSAGE_DTO) private _addsMessageDto: AddsMessageDtoPort) {
    }

    onAddMessageSubmited(addMessage: FormGroup): void {
        if (addMessage.invalid) {
            return;
        }
        alert("Dziękujemy!");
        this._addsMessageDto.add({
            name: addMessage.get('name').value,
            email: addMessage.get('email').value,
            text: addMessage.get('text').value,
        });
        addMessage.reset();
    }

} 
