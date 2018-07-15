import { Router } from '@angular/router';
import { AuthService } from './auth.service';
import { Component, OnInit } from '@angular/core';

export interface UserCredentials {
  email: string;
  password: string;
}

@Component({
  selector: 'app-auth-form',
  templateUrl: './auth-form.component.html',
  styleUrls: ['../../assets/auth-form.component.css']
})
export class AuthFormComponent implements OnInit {
  public user = {
    email: '',
    password: '',
  };

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
  }

  public async signInWithEmail() {
    try {
      const res = await this.authService.signInWithEmail(this.user.email, this.user.password);
      console.log(res);
      this.router.navigate(['tasks']);

    } catch (e) {
      console.log('error:' + e);
    }
  }

  public async createUserAndSignIn() {
    try {
      const response = await this.authService.createUser(this.user.email, this.user.password);
      console.log(response);
      await this.signInWithEmail();

    } catch (e) {
      console.log('error:' + e);
    }
  }
}
