import { ShoppingListService } from './shopping-list.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShoppingListComponent } from './shopping-list.component';
import { ShoppingItemComponent } from './shopping-item.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
  ],
  declarations: [
    ShoppingListComponent,
    ShoppingItemComponent,
  ],
  exports: [
    ShoppingListComponent,
  ],
  providers: [ShoppingListService]
})
export class ShoppingListModule { }
