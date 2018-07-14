import { Item } from './../models/item';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-shopping-item',
  templateUrl: './shopping-item.component.html',
  styleUrls: ['../../assets/shopping-item.component.css']
})
export class ShoppingItemComponent implements OnInit {
  @Input()
  public item: Item;

  constructor() { }

  ngOnInit() {
  }
}
