import { TestBed } from '@angular/core/testing';

import { LeadConverterService } from './lead-converter.service';

describe('LeadConverterService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LeadConverterService = TestBed.get(LeadConverterService);
    expect(service).toBeTruthy();
  });
});
