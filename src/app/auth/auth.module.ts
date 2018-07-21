
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { RootComponent } from './root/root.component';
import { SignUpFormComponent } from './signUp-form.component';
import { SignInFormComponent } from './signIn-form.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
  ],
  declarations: [SignInFormComponent, RootComponent, SignUpFormComponent]
})
export class AuthModule { }
