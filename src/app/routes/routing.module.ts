import { NotAuthenticatedGuardService } from './not-authenticated-guard.service';
import { AuthenticatedGuardService } from './authenticated-guard.service';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { SignUpFormComponent } from './../auth/signUp-form.component';
import { RootComponent } from '../auth/root/root.component';
import { SignInFormComponent } from '../auth/signIn-form.component';
import { ShoppingListComponent } from '../shopping-list/shopping-list.component';


const routes: Routes = [
  {path: '', component: RootComponent, canActivate: [NotAuthenticatedGuardService] },
  {path: 'signup', component: SignUpFormComponent, canActivate: [NotAuthenticatedGuardService] },
  {path: 'login', component: SignInFormComponent, canActivate: [NotAuthenticatedGuardService] },
  {path: 'tasks', component: ShoppingListComponent, canActivate: [AuthenticatedGuardService]} ,
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [ RouterModule ],
})
export class RoutingModule { }
