import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-sign-up-form',
  templateUrl: './signUp-form.component.html',
  styleUrls: ['./signUp-form.component.css']
})
export class SignUpFormComponent implements OnInit {
  public user = {
    name: '',
    email: '',
    password: '',
  };

  constructor(private authService: AuthService, public router: Router) { }

  ngOnInit() {
  }

  public async signInWithEmail() {
    try {
      const res = await this.authService.signInWithEmail(this.user.email, this.user.password);
      console.log(res);
      this.router.navigate(['tasks']);

    } catch (e) {
      throw e;
    }
  }

  public async createUserAndSignIn() {
    try {
      const response = await this.authService.createUser(this.user.email, this.user.password);

      if (response) {
        this.authService.updateUserInfo(this.user);
      }
    } catch (e) {
      if (e.code === 'auth/email-already-in-use') {
        this.signInWithEmail();
      } else {
        throw e;
      }
    }
  }
}
