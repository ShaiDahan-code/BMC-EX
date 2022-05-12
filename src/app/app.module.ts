import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { RegisterComponent } from './register/register.component';
import { AppRoutingModule } from './app-routing.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NavbarComponent } from './navbar/navbar.component';
import { MenuComponent } from './menu/menu.component';
import { AlertBasicComponent } from './alert-basic/alert-basic.component';
import {RouterModule} from "@angular/router";
import {FormsModule} from "@angular/forms";
import {MatTabsModule} from "@angular/material/tabs";



@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    RegisterComponent,
    NavbarComponent,
    MenuComponent,
    AlertBasicComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    RouterModule.forRoot([]),
    FormsModule,
    MatTabsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {

}
