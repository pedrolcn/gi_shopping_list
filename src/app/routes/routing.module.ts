import { NotAuthenticatedGuardService } from './not-authenticated-guard.service';
import { AuthenticatedGuardService } from './authenticated-guard.service';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';


import { AuthFormComponent } from './../auth/auth-form.component';
import { ShoppingListComponent } from './../shopping-list/shopping-list.component';


const routes: Routes = [
  {path: '', component: AuthFormComponent, canActivate: [NotAuthenticatedGuardService] },
  {path: 'tasks', component: ShoppingListComponent, canActivate: [AuthenticatedGuardService]} ,
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [ RouterModule ],
})
export class RoutingModule { }
