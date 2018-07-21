import { Item } from '../models/item';
import { Component, OnInit } from '@angular/core';
import { ShoppingListService } from './shopping-list.service';


@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['../../assets/shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  itemList: Item[] = [new Item({ title: 'Test Item' })];

  constructor(public slService: ShoppingListService) {}

  ngOnInit() {
  }

  add(): void {
    this.slService.createTask();
  }

  onItemRemove(item: Item) {
    this.slService.removeTask(item);
  }

  onItemUpdate(item: Item) {
    this.slService.updateTask(item);
  }
}
