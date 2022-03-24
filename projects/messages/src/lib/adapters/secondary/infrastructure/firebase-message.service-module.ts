import { NgModule } from '@angular/core';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { FirebaseMessageService } from './firebase-message.service';

@NgModule({ imports: [AngularFirestoreModule],
  	declarations: [],
  	providers: [FirebaseMessageService],
  	exports: [] })
export class FirebaseMessageServiceModule {
}
