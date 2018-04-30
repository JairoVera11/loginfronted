import { TestBed, async, inject } from '@angular/core/testing';

import { AuthaGuard } from './autha.guard';

describe('AuthaGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AuthaGuard]
    });
  });

  it('should ...', inject([AuthaGuard], (guard: AuthaGuard) => {
    expect(guard).toBeTruthy();
  }));
});
