import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';

@Injectable()
export class FirebaseService {

  user: any;

  constructor(private database: AngularFireDatabase, private auth: AngularFireAuth) { }

  register(email: string, pass: string) {
    return this.auth.auth.createUserWithEmailAndPassword(email, pass);
  }

  connect(email: string, pass: string) {
    return this.auth.auth.signInWithEmailAndPassword(email, pass);
  }

  setConnected(user: any) {
    this.user = user;
  }

  get connected() {
    return this.user != null;
  }

}
