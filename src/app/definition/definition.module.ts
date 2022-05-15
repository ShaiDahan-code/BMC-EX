import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DefinitionRoutingModule } from './definition-routing.module';
import { DefinitionComponent } from './definition.component';
import {TasksComponent} from "../tasks/tasks.component";
import {MatTableModule} from "@angular/material/table";
import {FormsModule} from "@angular/forms";


@NgModule({
  declarations: [
    DefinitionComponent,
    TasksComponent
  ],
  imports: [
    CommonModule,
    DefinitionRoutingModule,
    MatTableModule,
    FormsModule
  ],
  exports: [
    TasksComponent
  ]
})


export class DefinitionModule { }


