import { TestBed } from '@angular/core/testing';

import { MenuPageGuard } from './menu-page.guard';

describe('MenuPageGuard', () => {
  let guard: MenuPageGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(MenuPageGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
