import { tap, take } from 'rxjs/operators';

import { Router, CanActivate } from '@angular/router';
import { AuthService } from '../auth/auth.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthenticatedGuardService implements CanActivate {

  constructor(private authService: AuthService, private router: Router) { }

  canActivate() {
    return this.authService.authenticated.pipe(
      take(1),
      tap(authenticated => {
        if (!authenticated) {
          this.router.navigate(['/']);
        }
      })
    );
  }
}
