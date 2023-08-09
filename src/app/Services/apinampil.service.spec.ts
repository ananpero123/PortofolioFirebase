import { TestBed } from '@angular/core/testing';

import { ApinampilService } from './apinampil.service';

describe('ApinampilService', () => {
  let service: ApinampilService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApinampilService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
