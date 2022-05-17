import { ComponentFixture, TestBed } from '@angular/core/testing';

import {  NgbdOffcanvasComponent } from './offcanvas-focus.component';

describe('OffcanvasFocusComponent', () => {
  let component:  NgbdOffcanvasComponent;
  let fixture: ComponentFixture< NgbdOffcanvasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [  NgbdOffcanvasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent( NgbdOffcanvasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
