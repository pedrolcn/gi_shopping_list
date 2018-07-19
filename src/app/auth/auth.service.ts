import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public authenticated: boolean;
  public uid: string;

  constructor(private afAuth: AngularFireAuth, private router: Router) {
    afAuth.authState.subscribe(user => {
      this.authenticated = !!user;
      if (user) {
        this.uid = user.uid;
      }
    });
  }

  signInWithEmail(email, password) {
    return this.afAuth.auth.signInWithEmailAndPassword(email, password);
  }

  createUser(email, password) {
    return this.afAuth.auth.createUserWithEmailAndPassword(email, password);
  }

  async signOut() {
    await this.afAuth.auth.signOut();
    this.router.navigate(['/']);
  }
}
