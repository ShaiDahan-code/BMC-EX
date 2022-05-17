import { Component, Input } from '@angular/core';
import { NgbActiveOffcanvas, NgbOffcanvas } from '@ng-bootstrap/ng-bootstrap';
import {TasksComponent} from "../../tasks/tasks.component";

@Component({
  selector: 'ngbd-offcanvas-content',
  template: `
    <div class="offcanvas-header">
      <h5 class="offcanvas-title">Task Details: </h5>
      <button type="button" class="btn-close text-reset" aria-label="Close" (click)="activeOffcanvas.dismiss('Cross click')"></button>
    </div>
    <div class="offcanvas-body">
      <div *ngFor = "let detail of taskDetails">
        {{ detail }}
      </div>
    </div>
  `
})
export class NgbdOffcanvasContent {
  @Input() taskDetails: string= '';

  constructor(public activeOffcanvas: NgbActiveOffcanvas) {
  }
}

@Component({
  selector: 'ngbd-offcanvas-component',
  templateUrl: 'offcanvas-focus.component.html'}
)
export class NgbdOffcanvasComponent {
  @Input() lst: any;
  constructor(private offcanvasService: NgbOffcanvas) {}

  open() {
    const offcanvasRef = this.offcanvasService.open(NgbdOffcanvasContent);
    offcanvasRef.componentInstance.taskDetails = this.lst;



  }

}
