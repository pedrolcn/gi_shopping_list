import { map } from 'rxjs/operators';
import { AuthService } from './auth/auth.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['../assets/app.component.css']
})
export class AppComponent {
  constructor(public auth: AuthService) {}

  title = 'Lista de Compras';
}
