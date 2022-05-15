import { NgModule } from '@angular/core';
import {Routes, RouterModule, CanActivate, UrlTree, RouterStateSnapshot, ActivatedRouteSnapshot} from '@angular/router'; // CLI imports router
import {LoginPageComponent} from "./login-page/login-page.component";
import {MenuComponent} from "./menu/menu.component";
import {LoginPageGuard} from "./login-page.guard";
import {MenuPageGuard} from "./menu-page.guard";


const routes: Routes = [
  {path : 'login',canActivate: [MenuPageGuard] ,component:LoginPageComponent  },
  {path:'home',canActivate: [LoginPageGuard], component:MenuComponent},
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
