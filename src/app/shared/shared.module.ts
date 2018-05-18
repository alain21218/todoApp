import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FirebaseService } from './firebase.service';
import { MenuComponent } from './menu/menu.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    MenuComponent
  ],
  exports: [ 
    MenuComponent
  ],
  providers: [
    FirebaseService
  ]
})
export class SharedModule { }
