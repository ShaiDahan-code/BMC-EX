import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  username:string="";
  password:string="";
  confirm:string="";
  userFlag:boolean=false;
  confirmFlag:boolean=false;
  exist:boolean=false;
  submit:boolean=false;
  lenFlag:boolean=false;
  empty:boolean=false;
  final:boolean=false;
  router:string = "";

  constructor(private _router : Router) {
    this.router = _router.url;
  }



  ngOnInit(): void {
  }

  private checkName(){
    if(this.username.length==0){
      this.userFlag=true;
    }
  }
  private lenPass(){
    if(this.password.length==0 || this.confirm.length==0){
      this.lenFlag=true;
    }
  }
  private checkPassword() {

    if (!(this.password===this.confirm)){
      this.confirmFlag=true;
    }
  }
  register() {
    this.exist=this.submit=this.lenFlag=this.userFlag=this.confirmFlag=this.empty=this.final=false;
    this.lenPass();
    this.checkName();
    this.checkPassword();
    var taste = localStorage.getItem(this.username);
    if(this.password.length==0 && this.confirm.length==0 && this.username.length==0){
      this.empty=true;
    }
    if(taste!=null){
      this.exist=true;
    }
    if(!this.exist && this.username.length>0 && !this.confirmFlag && !this.lenFlag){
      localStorage.setItem(this.username,this.password);
      this._router.navigate(['/login'])
      this.final=true;
    }




  }


}
