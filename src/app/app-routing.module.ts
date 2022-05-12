import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Routes, RouterModule, CanActivate, UrlTree, RouterStateSnapshot, ActivatedRouteSnapshot} from '@angular/router'; // CLI imports router

import {LoginPageComponent} from "./login-page/login-page.component";
import {RegisterComponent} from "./register/register.component";
import {AppComponent} from "./app.component";
import {MenuComponent} from "./menu/menu.component";
import {Observable} from "rxjs";
import {LoginPageGuard} from "./login-page.guard";
import {MenuPageGuard} from "./menu-page.guard";

const routes: Routes = [
  {path : 'login',canActivate: [MenuPageGuard] ,component:LoginPageComponent  },
  {path : 'register', component:RegisterComponent},
  {path:'menu',canActivate: [LoginPageGuard], component:MenuComponent},
  {path:'',redirectTo:(localStorage.getItem(""))?'menu':'login',pathMatch:'full'}
]; // sets up routes constant where you define your routes

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
