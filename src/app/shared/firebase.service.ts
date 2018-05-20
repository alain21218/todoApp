import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import { LOCAL_STORAGE } from './enum';
import { Router } from '@angular/router';
import { Todo } from './model';

@Injectable()
export class FirebaseService {

  user: any = null;
  todoDB: AngularFireList<Todo>;

  constructor(private database: AngularFireDatabase, private auth: AngularFireAuth, private router: Router) {
    this.fromCache();
    this.todoDB = database.list("todo");
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
      this.user = JSON.parse(localStorage.getItem(LOCAL_STORAGE.USER));
    }
  }

  logout() {
    localStorage.removeItem(LOCAL_STORAGE.USER);
    this.user = null;
    this.router.navigate(["login"]);
  }

  addItem(todoTitle: string) {
    const todo = new Todo();
    todo.title = todoTitle;
    console.log(this.user);
    todo.email = this.user.email;
    todo.done = false;
    return this.todoDB.push(todo);
  }

  todoList() {
    return this.todoDB.snapshotChanges()
    .map(snapshot => { return snapshot.filter(snap => { return snap.payload.val().email === this.user.email }) })
    .map(snapshot => { return snapshot.map(snap => { return { key: snap.key, ...snap.payload.val() } })
    });
  }

  update(todo: Todo) {
    let temp = JSON.parse(JSON.stringify(todo));
    delete temp.key;

    return this.todoDB.update(todo.key, temp);
  }

}
