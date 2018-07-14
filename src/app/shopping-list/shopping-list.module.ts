import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShoppingListComponent } from './shopping-list.component';
import { ShoppingItemComponent } from './shopping-item.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    ShoppingListComponent,
    ShoppingItemComponent
  ],
  exports: [
    ShoppingListComponent,
  ]
})
export class ShoppingListModule { }
