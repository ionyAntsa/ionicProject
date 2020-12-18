import { TestBed } from '@angular/core/testing';

import { ServiceWordpressService } from './service-wordpress.service';

describe('ServiceWordpressService', () => {
  let service: ServiceWordpressService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiceWordpressService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
