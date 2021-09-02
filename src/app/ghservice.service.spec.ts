import { TestBed } from '@angular/core/testing';

import { GhserviceService } from './ghservice.service';

describe('GhserviceService', () => {
  let service: GhserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GhserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
