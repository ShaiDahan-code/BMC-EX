import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  user_name: string = "";
  constructor() { }

  ngOnInit(): void {
  }
  Test(){
    //change

    console.log(this.user_name);
  }

}
