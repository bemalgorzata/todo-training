import { NgModule } from '@angular/core';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { FirebaseMessageService } from './firebase-message.service';
import { ADDS_MESSAGE_DTO } from '../../../application/ports/secondary/adds-message.dto-port';

@NgModule({
	imports: [AngularFirestoreModule],
	declarations: [],
	providers: [FirebaseMessageService, { provide: ADDS_MESSAGE_DTO, useExisting: FirebaseMessageService }],
	exports: []
})
export class FirebaseMessageServiceModule {
}
