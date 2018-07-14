import { Item } from './../models/item';
import { Component, OnInit, Input, Output, EventEmitter, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-shopping-item',
  templateUrl: './shopping-item.component.html',
  styleUrls: ['../../assets/shopping-item.component.css']
})
export class ShoppingItemComponent implements OnInit, AfterViewInit {
  @Input()
  public item: Item;

  @Input()
  public index: number;

  @Output()
  public removeItemEvent: EventEmitter<string> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    const lastItem = <HTMLElement>document.querySelector('app-shopping-item:last-of-type input[type="text"]');
    lastItem.focus();
  }

  public removeItem(): void {
    this.removeItemEvent.emit(this.item.id);
  }
}
