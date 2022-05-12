import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {AppComponent} from "../app.component";
import {LoginPageComponent} from "../login-page/login-page.component";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  _router:string="";
  constructor(private router : Router) {
    this._router = router.url;
  }
  ngOnInit(): void {
  }

  move() {
    localStorage.removeItem("");
    this.router.navigate(['/login'])

  }
}
