import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { FirebaseService } from '../shared/firebase.service';

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(private firebaseService: FirebaseService, private router: Router) {
    console.log("auth");
  }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    if (!this.firebaseService.connected) {
      this.router.navigate(["login"]);
      return false;
    }
    return true;
  }
}
