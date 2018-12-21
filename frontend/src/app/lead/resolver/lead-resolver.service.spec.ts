import { TestBed } from '@angular/core/testing';

import { LeadResolverService } from './lead-resolver.service';

describe('LeadResolverService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LeadResolverService = TestBed.get(LeadResolverService);
    expect(service).toBeTruthy();
  });
});
