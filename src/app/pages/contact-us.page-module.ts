import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ContactUsPage } from './contact-us.page';
import { ContactFormComponentModule } from '@messages';
import { FirebaseMessageServiceModule } from '../../../projects/messages/src/lib/adapters/secondary/infrastructure/firebase-message.service-module';

@NgModule({
  imports: [CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: ContactUsPage,
      }
    ]),
    ContactFormComponentModule,
    FirebaseMessageServiceModule
  ],
  declarations: [ContactUsPage],
  providers: [],
  exports: []
})
export class ContactUsPageModule {
}
