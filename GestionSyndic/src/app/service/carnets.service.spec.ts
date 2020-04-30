import { TestBed } from '@angular/core/testing';

import { CarnetsService } from './carnets.service';

describe('CarnetsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CarnetsService = TestBed.get(CarnetsService);
    expect(service).toBeTruthy();
  });
});
