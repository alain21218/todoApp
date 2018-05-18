import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AuthService } from './auth.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    LoginComponent,
    RegisterComponent],
  providers: [
    AuthService
  ]
})
export class AuthModule { }