import { TestBed } from '@angular/core/testing';

import { NgpMcqService } from './ngp-mcq.service';

describe('NgpMcqService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NgpMcqService = TestBed.get(NgpMcqService);
    expect(service).toBeTruthy();
  });
});
