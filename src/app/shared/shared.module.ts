import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FirebaseService } from './firebase.service';
import { MenuComponent } from './menu/menu.component';
import { RouterModule } from '@angular/router';
import { routes } from '../../environments/route.config';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
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
