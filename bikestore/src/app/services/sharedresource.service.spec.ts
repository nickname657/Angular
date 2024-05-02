import { TestBed } from '@angular/core/testing';

import { SharedresourceService } from './sharedresource.service';

describe('SharedresourceService', () => {
  let service: SharedresourceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SharedresourceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
