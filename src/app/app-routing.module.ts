import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Routes, RouterModule, CanActivate, UrlTree, RouterStateSnapshot, ActivatedRouteSnapshot} from '@angular/router'; // CLI imports router

import {LoginPageComponent} from "./login-page/login-page.component";
import {AppComponent} from "./app.component";
import {MenuComponent} from "./menu/menu.component";
import {Observable} from "rxjs";
import {LoginPageGuard} from "./login-page.guard";
import {MenuPageGuard} from "./menu-page.guard";
import {TasksComponent} from "./tasks/tasks.component";
import {DefinitionModule} from "./definition/definition.module";

const routes: Routes = [
  {path : 'login',canActivate: [MenuPageGuard] ,component:LoginPageComponent  },
  {path:'home',canActivate: [LoginPageGuard], component:MenuComponent},
  {path:'tasks',canActivate: [LoginPageGuard], component:TasksComponent},
  {path:'',redirectTo:(localStorage.getItem(""))?'home':'login',pathMatch:'full'},
  /*new lazy loading*/
  {
    path: 'definition', loadChildren: () => import('./definition/definition.module').then(m => m.DefinitionModule)
  },
  { path: 'Monitoring', loadChildren: () => import('./monitoring/monitoring.module').then(m => m.MonitoringModule) }
]; // sets up routes constant where you define your routes

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
