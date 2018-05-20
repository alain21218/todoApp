import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../../shared/firebase.service';
import { Todo } from '../../shared/model';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  todoList: any;

  constructor(private firebaseService: FirebaseService) { }

  ngOnInit() {
    this.firebaseService.todoList().subscribe(done => { this.todoList = done });
  }

  finishTodo(todo: Todo) {
    todo.done = !todo.done;
    this.firebaseService.update(todo);
  }
}
