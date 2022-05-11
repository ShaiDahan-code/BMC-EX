import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {
  router:string = "";
  username:string="";
  password:string="";
  check:any;
  userFlag: boolean=false;
  passFlag:boolean=false;
  userLen:boolean=false;
  passLen:boolean=false;
  isLogin:boolean=false;
  constructor(private _router : Router) {
    this.router = _router.url;
  }
  ngOnInit(): void {
  }
  nameCheck():void {
    for(let i=0;i<localStorage.length;i++){
      if(localStorage.key(i)===this.username){
        this.userFlag=false;
        return;
      }
    }
    this.userFlag=true;
  }
  login() {
    this.userFlag=false;
    this.passFlag=false;
    this.passLen=false;
    this.userLen=false;
    if(this.password.length===0 && this.username.length===0){
      this.userLen=this.passLen=true;
      return;
    }
    this.nameCheck();
      for(let i=0;i<localStorage.length;i++){
        if(localStorage.key(i)===this.username){
          this.check=localStorage.key(i);
          console.log(this.check);
          if(localStorage.getItem(this.check)===this.password){
            this.isLogin=true;
            this._router.navigate(['/menu'])
          }
          else{
            this.passFlag=true;
          }
        }
      }
    }

  navigate() {
    this._router.navigate(['/register'])
  }
}
