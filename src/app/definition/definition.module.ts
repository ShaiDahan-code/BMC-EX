import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DefinitionRoutingModule } from './definition-routing.module';
import { DefinitionComponent } from './definition.component';
import {NavbarComponent} from "../navbar/navbar.component";



@NgModule({
  declarations: [
    DefinitionComponent
  ],
  imports: [
    CommonModule,
    DefinitionRoutingModule,



  ]
})


export class DefinitionModule { }


