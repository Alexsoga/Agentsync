import { TestBed, async, inject } from '@angular/core/testing';

import { CanreadorderGuard } from './canreadorder.guard';

describe('CanreadorderGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CanreadorderGuard]
    });
  });

  it('should ...', inject([CanreadorderGuard], (guard: CanreadorderGuard) => {
    expect(guard).toBeTruthy();
  }));
});
