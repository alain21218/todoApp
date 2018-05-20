import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import { LOCAL_STORAGE } from './enum';
import { Router } from '@angular/router';

@Injectable()
export class FirebaseService {

  user: any = null;

  constructor(private database: AngularFireDatabase, private auth: AngularFireAuth, private router: Router) {
    this.fromCache();
  }

  register(email: string, pass: string) {
    return this.auth.auth.createUserWithEmailAndPassword(email, pass);
  }

  connect(email: string, pass: string) {
    return this.auth.auth.signInWithEmailAndPassword(email, pass);
  }

  setConnected(user: any) {
    this.user = user;
  }

  public get connected() {
    this.fromCache();
    return this.user != null;
  }

  fromCache() {
    if (this.user === null) {
      this.user = localStorage.getItem(LOCAL_STORAGE.USER);
    }
  }

  logout() {
    localStorage.removeItem(LOCAL_STORAGE.USER);
    this.user = null;
    this.router.navigate(["login"]);
  }

}
