import { TestBed } from '@angular/core/testing';

import { PrivilegService } from './privileg.service';

describe('PrivilegService', () => {
  let service: PrivilegService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PrivilegService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
