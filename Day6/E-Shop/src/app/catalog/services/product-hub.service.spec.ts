import { TestBed } from '@angular/core/testing';

import { ProductHubService } from './product-hub.service';

describe('ProductHubService', () => {
  let service: ProductHubService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProductHubService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
