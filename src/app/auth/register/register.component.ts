import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../../shared/firebase.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  public email: string;
  public pass: string;

  constructor(private firebaseService: FirebaseService) { }

  ngOnInit() {
  }

  register() {
    this.firebaseService.register(this.email, this.pass).then(
      done => { console.log(done) }
    ).catch(
      error => { console.log(error); }
    )
  }

}
