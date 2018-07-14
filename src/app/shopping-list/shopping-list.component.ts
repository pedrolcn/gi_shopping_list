import { Item } from './../models/item';
import { Component, OnInit, AfterViewChecked } from '@angular/core';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['../../assets/shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit, AfterViewChecked {
  itemList: Item[] = [new Item({ title: 'Test Item' })];

  constructor() { }

  ngOnInit() {
  }

  ngAfterViewChecked() {
    const lastItem = <HTMLElement>document.querySelector('app-shopping-item:last-of-type input[type="text"]');
    lastItem.focus();
  }

  add(): void {
    this.itemList.push( new Item({title: 'Novo item...' }) );
  }
}
