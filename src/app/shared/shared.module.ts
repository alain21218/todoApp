import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { FormsModule } from '@angular/forms';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FirebaseService } from './firebase.service';
import { MenuComponent } from './menu/menu.component';
import { RouterModule } from '@angular/router';
import { routes } from '../../environments/route.config';
import { FIREBASE_CONFIG } from '../../environments/firebase.config';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes),
    AngularFireModule.initializeApp(FIREBASE_CONFIG),
    AngularFireDatabaseModule, 
    AngularFireAuthModule
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
