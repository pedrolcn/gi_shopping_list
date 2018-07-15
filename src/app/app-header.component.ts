import { Component, OnInit, Input, Output } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-header',
  templateUrl: './app-header.component.html',
  styleUrls: ['./app-header.component.css']
})
export class HeaderComponent implements OnInit {
  @Input()
  authenticated: boolean;

  constructor() { }

  ngOnInit() {
  }

}
