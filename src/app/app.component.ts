
import {Component, OnInit, VERSION} from '@angular/core';
import {Router} from "@angular/router";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {


  title = 'BMC-EX';
  router: string;
  static n = 0;

  constructor(private _router: Router){

    this.router = _router.url;
  }

  SendToLoginPage(){
    this._router.navigate(['/login']);
  }
  SendToRegisterPage(){
    this._router.navigate(['/register']);
  }

  ngOnInit(): void {
    console.log("I Restart!!!");
    console.log(AppComponent.n);
    AppComponent.n += 1;
  }
}
