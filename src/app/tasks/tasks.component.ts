import { Component, OnInit } from '@angular/core';
import {Route, Router} from "@angular/router";
export class PeriodicElement2 {
  name: string="";
  position: number;
  Description: string="";
  Run_Time : Date;
  status:string;
  constructor(name: string, pos: number, des: string, run: Date, status: Status) {
    this.name=name;
    this.position=pos;
    this.Run_Time=run;
    this.status=status;
    this.Description=des;
  }

}

export enum Status{
  NotStart='Not started',
  InProgress='In progress',
  Done='Done'
}


const ELEMENT_DATA: PeriodicElement2[] = [
  {position: 1, name: 'Hydrogen', Description: '1.0079', Run_Time: new Date(),status:Status.Done},
  {position: 2, name: 'Hydrogen', Description: '1.0079', Run_Time: new Date(),status:Status.Done},
  {position: 3, name: 'Hydrogen', Description: '1.0079', Run_Time: new Date(),status:Status.Done},
  {position: 4, name: 'Hydrogen', Description: '1.0079', Run_Time: new Date(),status:Status.Done},
  {position: 5,name: 'Hydrogen', Description: '1.0079', Run_Time: new Date(),status:Status.Done},
  {position: 6, name: 'Hydrogen', Description: '1.0079', Run_Time: new Date(),status:Status.Done},
  {position: 7, name: 'Hydrogen', Description: '1.0079', Run_Time: new Date(),status:Status.Done},
  {position: 8, name: 'Hydrogen', Description: '1.0079', Run_Time: new Date(),status:Status.Done},
  {position: 9, name: 'Hydrogen', Description: '1.0079', Run_Time: new Date(),status:Status.Done},
  {position: 10, name: 'Hydrogen', Description: '1.0079', Run_Time: new Date(),status:Status.Done},
];

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {
  displayedColumns: string[] = ['position', 'name','Description','Run_Time','status'];
  dataSource = ELEMENT_DATA;
  constructor() { }

  ngOnInit(): void {
  }

}
