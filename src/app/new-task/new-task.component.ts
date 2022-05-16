import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new-task',
  templateUrl: './new-task.component.html',
  styleUrls: ['./new-task.component.css']
})
export class NewTaskComponent implements OnInit {


  name = "";
  run_time = "";
  task_name= "";
  description = "";
  status = "";

  constructor() { }

  ngOnInit(): void {
  }
  SubmitNewTask(){
    //create a new array from the form and save it to local storage
    let newTask = [this.name, this.run_time, this.task_name, this.description, this.status];
    // @ts-ignore
    let tasks = JSON.parse(localStorage.getItem("tasks"));
    if(tasks == null){
      tasks = [];
    }
    tasks.push(newTask);
    localStorage.setItem("tasks", JSON.stringify(tasks));
    this.name = "";
    this.run_time = "";
    this.task_name = "";
    this.description = "";
    this.status = "";

  }

}
