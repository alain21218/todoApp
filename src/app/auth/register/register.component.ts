import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../../shared/firebase.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  public formGroup: FormGroup

  constructor(private firebaseService: FirebaseService, private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.formGroup = this.formBuilder.group({
      email: [null, [Validators.required, Validators.email]],
      pass: [null, [Validators.required, Validators.minLength(8), Validators.maxLength(100)]]
    })
  }

  register() {
    this.firebaseService.register(this.email.value, this.pass.value).then(
      done => { console.log(done) }
    ).catch(
      error => { console.log(error); }
    )
  }

  get email() {
    return this.formGroup.get('email');
  }  

  get pass() {
    return this.formGroup.get('pass');
  } 
}
