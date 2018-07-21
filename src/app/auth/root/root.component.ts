import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './root.component.html',
  styleUrls: ['../../../assets/root.component.css']
})
export class RootComponent implements OnInit {

  constructor(public router: Router) { }

  ngOnInit() {
  }

}
