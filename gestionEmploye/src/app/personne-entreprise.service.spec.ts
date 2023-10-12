import { TestBed } from '@angular/core/testing';

import { PersonneEntrepriseService } from './personne-entreprise.service';

describe('PersonneEntrepriseService', () => {
  let service: PersonneEntrepriseService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PersonneEntrepriseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
