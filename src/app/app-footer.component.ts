import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';

@Component({
  selector: 'app-app-footer',
  templateUrl: './app-footer.component.html',
  styleUrls: ['../assets/app-footer.component.css']
})
export class AppFooterComponent implements OnInit {
  public year = moment().format('YYYY');
  public author = 'Pedro Nascimento';

  constructor() { }

  ngOnInit() {
  }

}
