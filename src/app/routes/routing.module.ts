import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { AuthFormComponent } from './../auth/auth-form.component';
import { ShoppingListComponent } from './../shopping-list/shopping-list.component';

const routes: Routes = [
  {path: '', component: AuthFormComponent },
  {path: 'tasks', component: ShoppingListComponent} ,
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [ RouterModule ],
})
export class RoutingModule { }
