import { Component, OnInit } from '@angular/core';
export class PeriodicElement2 {
  name: string="";
  position: number;
  Description: string="";
  Run_Time : Date;
  status:string;
  extime:Date;
  constructor(name: string, pos: number, des: string, run: Date, status: Status,extime:Date) {
    this.name=name;
    this.position=pos;
    this.Run_Time=run;
    this.status=status;
    this.Description=des;
    this.extime=extime;
  }
}

export enum Status{
  NotStart='Not started',
  InProgress='In progress',
  Done='Done'
}


const ELEMENT_DATA: PeriodicElement2[] = [
  {position: 1, name: 'Hydrogen', Description: '1.0079', Run_Time: new Date(),status:Status.Done,extime: new Date()},
];

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {
  displayedColumns: string[] = ['position', 'name','Description','Run_Time','status','extime'];
  dataSource = ELEMENT_DATA;
  constructor() { }

  ngOnInit(): void {
  }

}
