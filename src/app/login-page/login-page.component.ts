import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {
  SUsuccess:boolean=false;
  SUusername:string="";
  SUpassword:string="";
  SUconfirm:string="";
  SUuserFlag:boolean=false;
  SUconfirmFlag:boolean=false;
  SUexist:boolean=false;
  SUsubmit:boolean=false;
  SUlenFlag:boolean=false;
  SUempty:boolean=false;
  SUfinal:boolean=false;
  SUrouter:string = "";

  //Check if we are Login
  static isLogIn:boolean = false;



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
  private checkName(){
    if(this.SUusername.length==0){
      this.SUuserFlag=true;
    }
  }
  private lenPass(){
    if(this.SUpassword.length==0 || this.SUconfirm.length==0){
      this.SUlenFlag=true;
    }
  }
  private checkPassword() {

    if (!(this.SUpassword===this.SUconfirm)){
      this.SUconfirmFlag=true;
    }
  }
  register() {
    this.SUexist=this.SUsubmit=this.SUlenFlag=this.SUuserFlag=this.SUconfirmFlag=this.SUempty=this.SUfinal=false,this.SUsuccess;
    this.lenPass();
    this.checkName();
    this.checkPassword();
    var taste = localStorage.getItem(this.SUusername);
    if(this.SUpassword.length==0 && this.SUconfirm.length==0 && this.SUusername.length==0){
      this.SUempty=true;
    }
    if(taste!=null){
      this.SUexist=true;
    }
    if(!this.SUexist && this.SUusername.length>0 && !this.SUconfirmFlag && !this.SUlenFlag){
      localStorage.setItem(this.SUusername,this.SUpassword);
      this._router.navigate([''])
      console.log("hey")
      this.SUfinal=true;
      alert("Thank you!\n" +
        "Your account has been successfully created. please press login!\n" +
        "\n" +
        "[BMc]")
    }




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
            localStorage.setItem("", "");
            this._router.navigate(['menu'])
          }
          else{
            this.passFlag=true;
          }
        }
      }
    }
  async navigate() {
    await this._router.navigate(['/register']);
    console.log("hey");
  }
  check22(){
    console.log(LoginPageComponent.isLogIn);
  }


}
