import { map } from 'rxjs/operators';

import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public authenticated: Observable<boolean>;
  public uid: Observable<string>;
  public user: Observable<firebase.User>;

  constructor(private afAuth: AngularFireAuth, private router: Router) {
    this.authenticated = afAuth.authState.pipe(map(user => !!user));
    this.uid = afAuth.authState.pipe(map(user => user.uid));
    this.user = afAuth.authState.pipe(map(user => user));
  }

  signInWithEmail(email, password) {
    return this.afAuth.auth.signInWithEmailAndPassword(email, password);
  }

  createUser(email, password) {
    return this.afAuth.auth.createUserWithEmailAndPassword(email, password);
  }

  updateUserInfo(user) {
    this.afAuth.auth.currentUser.updateProfile({
      displayName: user.name,
      photoURL: ''
    });
  }

  async signOut() {
    await this.afAuth.auth.signOut();
    this.router.navigate(['/']);
  }
}
