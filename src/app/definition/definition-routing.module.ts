import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DefinitionComponent } from './definition.component';
import {TasksComponent} from "../tasks/tasks.component";
import {NewTaskComponent} from "../new-task/new-task.component";


const routes: Routes = [
  { path: '', component: DefinitionComponent},
  { path: 'new_task', component: NewTaskComponent},
  { path: 'tasks', component: TasksComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DefinitionRoutingModule { }
