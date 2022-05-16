import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DefinitionRoutingModule } from './definition-routing.module';
import { DefinitionComponent } from './definition.component';
import {TasksComponent} from "../tasks/tasks.component";
import {MatTableModule} from "@angular/material/table";
import {FormsModule} from "@angular/forms";
import {HomeModule} from "../home/home.module";
import {MatIconModule} from "@angular/material/icon";

import {MatTabsModule} from "@angular/material/tabs";
import {MatSelectModule} from "@angular/material/select";
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {MatProgressBarModule} from "@angular/material/progress-bar";
import {MatStepperModule} from "@angular/material/stepper";
import {NewTaskComponent} from "../new-task/new-task.component";




@NgModule({
  declarations: [
    DefinitionComponent,
    TasksComponent,
    NewTaskComponent
  ],
  imports: [
    CommonModule,
    DefinitionRoutingModule,
    MatTableModule,
    FormsModule,
    HomeModule,
    MatIconModule,
    MatTabsModule,
    MatSelectModule,
    NgbModule,
    MatProgressBarModule,
    MatStepperModule
  ],
  exports: [
    TasksComponent,
    NewTaskComponent
  ]
})


export class DefinitionModule { }


