import { TestBed } from '@angular/core/testing';

import { SynidcService } from './synidc.service';

describe('SynidcService', () => {
  let service: SynidcService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SynidcService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
