import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import {NavbarComponent} from "../navbar/navbar.component";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import {MatTabsModule} from "@angular/material/tabs";
import {MatSelectModule} from "@angular/material/select";
import {MatIconModule} from "@angular/material/icon";
import {MatProgressBarModule} from "@angular/material/progress-bar";
import {MatTableModule} from "@angular/material/table";
import {MatStepperModule} from "@angular/material/stepper";


@NgModule({
  declarations: [
    HomeComponent,
    NavbarComponent,
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    MatTabsModule,
    MatSelectModule,
    MatIconModule,
    MatProgressBarModule,
    MatTableModule,
    MatStepperModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,

  ],
  exports: [
    NavbarComponent
  ]
})
export class HomeModule { }
