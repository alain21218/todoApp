import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';

@Injectable()
export class FirebaseService {

  constructor(private database: AngularFireDatabase, private auth: AngularFireAuth) { 
    
  }


  register(email: string, pass: string) {
    return this.auth.auth.createUserWithEmailAndPassword(email, pass);
  }

}
