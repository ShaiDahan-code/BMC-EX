import { NgModule } from '@angular/core';
import {Routes, RouterModule, CanActivate, UrlTree, RouterStateSnapshot, ActivatedRouteSnapshot} from '@angular/router'; // CLI imports router
import {LoginPageComponent} from "./login-page/login-page.component";
import {MenuComponent} from "./menu/menu.component";
import {LoginPageGuard} from "./login-page.guard";
import {MenuPageGuard} from "./menu-page.guard";


const routes: Routes = [
  {path : 'login',canActivate: [MenuPageGuard] ,component:LoginPageComponent  },
  {path:'',redirectTo:(localStorage.getItem(""))?'home':'login',pathMatch:'full'},

  /*new lazy loading*/

  { path: 'home', loadChildren: () => import('./home/home.module').then(m => m.HomeModule), canActivate: [LoginPageGuard] }
]; // sets up routes constant where you define your routes

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
