import { Item } from './../models/item';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['../../assets/shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  itemList: Item[] = [new Item({ title: 'Test Item' })];

  constructor() { }

  ngOnInit() {
  }

  add(): void {
    this.itemList.push( new Item() );
  }

  onItemRemove(itemId: string) {
    this.itemList = this.itemList.filter(value => value.id !== itemId);
  }
}
