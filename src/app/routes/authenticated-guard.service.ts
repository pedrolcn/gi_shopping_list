import { Router, CanActivate } from '@angular/router';
import { AuthService } from './../auth/auth.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthenticatedGuardService implements CanActivate {

  constructor(private authService: AuthService, private router: Router) { }

  canActivate() {
    if (this.authService.authenticated) {
      return true;
    } else {
      this.router.navigate(['/']);
      return false;
    }
  }
}
