import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-sign-up-form',
  templateUrl: './signUp-form.component.html',
  styleUrls: ['../../assets/signUp-form.component.css']
})
export class SignUpFormComponent implements OnInit {
  public user = {
    name: '',
    email: '',
    password: '',
  };

  public loading = false;

  constructor(private authService: AuthService, public router: Router) { }

  ngOnInit() {
  }

  public async signInWithEmail() {
    try {
      this.loading = true;
      const res = await this.authService.signInWithEmail(this.user.email, this.user.password);
      console.log(res);
      this.router.navigate(['tasks']);

    } catch (e) {
      this.loading = false;
      throw e;
    }

    this.loading = false;
  }

  public async createUserAndSignIn() {
    try {
      this.loading = true;
      const response = await this.authService.createUser(this.user.email, this.user.password);

      if (response) {
        this.authService.updateUserInfo(this.user);
      }
    } catch (e) {
      if (e.code === 'auth/email-already-in-use') {
        this.signInWithEmail();
      } else {
        this.loading = false;
        throw e;
      }
    }

    this.loading = false;
  }
}
