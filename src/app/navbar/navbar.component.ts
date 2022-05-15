import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  user=localStorage.getItem("")
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
  Move2(){
    this.router.navigate(['definition/tasks'])

  }
}
