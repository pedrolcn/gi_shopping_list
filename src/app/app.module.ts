import { environment } from './../environments/environment.prod';
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

import { AppFooterComponent } from './app-footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AppFooterComponent,
  ],
  imports: [
    BrowserModule,
    NgbModule.forRoot(),
    ShoppingListModule,
    RoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    AuthModule,
    FormsModule,
  ],
  providers: [AuthService],
  bootstrap: [AppComponent],
})
export class AppModule { }
