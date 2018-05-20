import { Component, OnInit } from '@angular/core';
import { AngularFireAction } from 'angularfire2/database';
import { FirebaseService } from '../firebase.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor(public firebaseService: FirebaseService) { }

  ngOnInit() {
  }

}
