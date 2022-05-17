import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OffcanvasFocusComponent } from './offcanvas-focus.component';

describe('OffcanvasFocusComponent', () => {
  let component: OffcanvasFocusComponent;
  let fixture: ComponentFixture<OffcanvasFocusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OffcanvasFocusComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OffcanvasFocusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
