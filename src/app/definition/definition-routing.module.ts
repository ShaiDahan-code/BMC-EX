import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DefinitionComponent } from './definition.component';
import {TasksComponent} from "../tasks/tasks.component";


const routes: Routes = [{ path: '', component: DefinitionComponent },
                       { path: 'task', component: TasksComponent } ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DefinitionRoutingModule { }
