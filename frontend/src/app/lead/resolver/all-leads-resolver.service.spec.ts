import { TestBed } from '@angular/core/testing';

import { AllLeadsResolverService } from './lead-resolver.service';

describe('LeadResolverService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AllLeadsResolverService = TestBed.get(AllLeadsResolverService);
    expect(service).toBeTruthy();
  });
});
