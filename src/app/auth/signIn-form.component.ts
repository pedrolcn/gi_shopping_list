import { Router } from '@angular/router';
import { AuthService } from './auth.service';
import { Component, OnInit } from '@angular/core';

export interface UserCredentials {
  email: string;
  password: string;
}

@Component({
  selector: 'app-sign-in-form',
  templateUrl: './signIn-form.component.html',
  styleUrls: ['../../assets/signIn-form.component.css']
})
export class SignInFormComponent implements OnInit {
  public user = {
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
      console.log('error:' + e);

      this.loading = false;
    }

    this.loading = false;
  }

  public async createUserAndSignIn() {
    try {
      this.loading = true;

      const response = await this.authService.createUser(this.user.email, this.user.password);
      console.log(response);
      await this.signInWithEmail();

    } catch (e) {
      console.log('error:' + e);

      this.loading = false;
    }

    this.loading = false;
  }
}
