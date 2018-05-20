import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../../shared/firebase.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LOCAL_STORAGE } from '../../shared/enum';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public formGroup: FormGroup

  constructor(private firebaseService: FirebaseService, private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.formGroup = this.formBuilder.group({
      email: [null, [Validators.required, Validators.email]],
      pass: [null, [Validators.required, Validators.minLength(8), Validators.maxLength(100)]]
    })
  }

  connect() {
    this.firebaseService.connect(this.email.value, this.pass.value).then(
      done => { 
        this.firebaseService.setConnected(done.user);
        localStorage.setItem(LOCAL_STORAGE.USER, JSON.stringify(done.user));
      },
      error => { console.log(error) }
    )
  }

  get email() {
    return this.formGroup.get('email');
  }  

  get pass() {
    return this.formGroup.get('pass');
  }

}
