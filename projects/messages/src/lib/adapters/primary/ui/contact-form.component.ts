import { Component, ViewEncapsulation, ChangeDetectionStrategy } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

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
        email: new FormControl(),
        text: new FormControl()
    });


    Submit(messageForm: FormGroup): void {
        console.log(messageForm.getRawValue());
        alert(`email: ${messageForm.value.email}, text: ${messageForm.value.text}`);
    }

}
