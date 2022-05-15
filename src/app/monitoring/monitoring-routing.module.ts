import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MonitoringComponent } from './monitoring.component';
import {TasksComponent} from "../tasks/tasks.component";

const routes: Routes = [{ path: '', component: MonitoringComponent }
                          ,{ path: 'tasks', component: TasksComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MonitoringRoutingModule { }
