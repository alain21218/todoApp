import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../../shared/firebase.service';
import { Todo } from '../../shared/model';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  newTodo = "";

  constructor(private firebaseService: FirebaseService) { }

  ngOnInit() {
  }

  add() {
    this.firebaseService.addItem(this.newTodo)
    .then(done => { this.newTodo = "" })
  }

}
