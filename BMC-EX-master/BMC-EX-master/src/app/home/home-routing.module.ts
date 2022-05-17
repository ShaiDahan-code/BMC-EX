import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home.component';
import {LoginPageGuard} from "../login-page.guard";

const routes: Routes = [{ path: '', component: HomeComponent },
  {
    path: 'definition',canActivate:[LoginPageGuard], loadChildren: () => import('../definition/definition.module').then(m => m.DefinitionModule)
  },
  { path: 'Monitoring', loadChildren: () => import('../monitoring/monitoring.module').then(m => m.MonitoringModule) }];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
