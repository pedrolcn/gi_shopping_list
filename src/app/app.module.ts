import { FormsModule } from '@angular/forms';
import { RoutingModule } from './routes/routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppComponent } from './app.component';
import { ShoppingListModule } from './shopping-list/shopping-list.module';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';

import { AuthService } from './auth/auth.service';
import { AuthModule } from './auth/auth.module';
import { HeaderComponent } from './app-header.component';

export const config = {
  apiKey: 'AIzaSyCUiALmnTwW_T4B8iFpVO9aT_lKYLj9iWs',
  authDomain: 'gi-shopping-app.firebaseapp.com',
  databaseURL: 'https://gi-shopping-app.firebaseio.com',
  projectId: 'gi-shopping-app',
  storageBucket: 'gi-shopping-app.appspot.com',
  messagingSenderId: '359933983069'
};

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
  ],
  imports: [
    BrowserModule,
    NgbModule.forRoot(),
    ShoppingListModule,
    RoutingModule,
    AngularFireModule.initializeApp(config),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    AuthModule,
    FormsModule,
  ],
  providers: [AuthService],
  bootstrap: [AppComponent],
})
export class AppModule { }
