import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable()
export class FirebaseMessageService {
  constructor(private _client: AngularFirestore) {
  }
}
