import {Component, OnInit, Input, EventEmitter, Output} from '@angular/core';
import {PeriodicElement2} from "../tasks/tasks.component";

@Component({
  selector: 'app-new-task',
  templateUrl: './new-task.component.html',
  styleUrls: ['./new-task.component.css']
})
export class NewTaskComponent implements OnInit {
  @Input() toadd:PeriodicElement2=new PeriodicElement2();
  @Output() taskChange:EventEmitter<PeriodicElement2>=new EventEmitter<PeriodicElement2>();


  task_name= "";
  run_time = "";
  description = "";
  status = "";
  date:Date = new Date();


  constructor() { }

  ngOnInit(): void {
  }
  SubmitNewTask(){
    //create a new array from the form and save it to local storage
    let newTask = [this.task_name, this.description,this.run_time, this.status];
    // @ts-ignore
    let tasks = JSON.parse(localStorage.getItem("tasks"));
    if(tasks == null){
      tasks = [];
    }
    tasks.push(newTask);
    localStorage.setItem("tasks", JSON.stringify(tasks));
    this.run_time = "";
    this.task_name = "";
    this.description = "";
    this.status = "";

  }
  update(){
    this.taskChange.emit(this.toadd);
  }

}
