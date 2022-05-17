import {Component, OnInit, SimpleChanges} from '@angular/core';


export class PeriodicElement2 {
  name: string="";
  position: number;
  Description: string="";
  Run_Time : Date;
  status:string;
  extime:Date;

  constructor(name: string="", pos: number=0, des: string="", run: Date=new Date(), status: Status=Status.NotStart,extime:Date=new Date()) {
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


// const ELEMENT_DATA: PeriodicElement2[] = [
//   {position: 1, name: 'Hydrogen', Description: '1.0079', Run_Time: new Date(),status:Status.Done,extime: new Date()},
//   {position: 2, name: 'Hydrogen', Description: '1.0079', Run_Time: new Date(),status:Status.Done,extime: new Date()}
// ];

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {
  displayedColumns: string[] = [ '#', 'name','Description','Run_Time','status'];
  Columns: string[] = ['position', 'name','Description','Run_Time','status','extime'];
  check:boolean=false;
  i:number=0;
  // dataSource = ELEMENT_DATA;
  lstTask: any = localStorage.getItem('tasks');
  flag: boolean = true;
  flag2: boolean = false;
  indextoedit: number = 0;
  TaskToEdit: PeriodicElement2 = new PeriodicElement2();
  TaskToDel: PeriodicElement2 = new PeriodicElement2();



  constructor() {
    this.lstTask = JSON.parse(this.lstTask)
  }

  ngOnChanges(changes: SimpleChanges): void {
        throw new Error('Method not implemented.');
    }

  ngOnInit(): void {
  }

  edit(indexOfElement: number): void {
    this.flag2 = true;
    this.indextoedit = indexOfElement;
    for (let i = 0; i < this.lstTask.length; i++) {
      if (i == this.indextoedit) {
        this.TaskToEdit.name = this.lstTask[i][0];
        this.TaskToEdit.Description = this.lstTask[i][1];
        this.TaskToEdit.extime = this.lstTask[i][2];
        this.TaskToEdit.status = this.lstTask[i][3];
      }
    }


  }

  update() {
    for (let i = 0; i < this.lstTask.length; i++) {
      if (i == this.indextoedit) {
        this.lstTask[i][0] = this.TaskToEdit.name;
        this.lstTask[i][1] = this.TaskToEdit.Description;
        this.lstTask[i][2] = this.TaskToEdit.extime;
        this.lstTask[i][3] = this.TaskToEdit.status;
      }
    }
    alert("task update")
    this.flag2 = false;

  }

  delTask(indexOfElement: number) {

    this.lstTask.splice(indexOfElement,1)  ;

     localStorage.setItem('tasks',JSON.stringify(this.lstTask));






  }
}
