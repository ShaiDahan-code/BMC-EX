import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DefinitionComponent } from './definition.component';
import {TasksComponent} from "../tasks/tasks.component";
import {NewTaskComponent} from "../new-task/new-task.component";
import {NgbdOffcanvasComponent} from "./offcanvas-focus/offcanvas-focus.component";


const routes: Routes = [
  { path: '', component: DefinitionComponent},
  { path: 'new_task', component: NewTaskComponent},
  { path: 'tasks', component: TasksComponent},
  { path: 'offcanvas', component: NgbdOffcanvasComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DefinitionRoutingModule { }
