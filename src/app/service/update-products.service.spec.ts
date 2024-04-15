import { TestBed } from '@angular/core/testing';

import { UpdateProductsService } from './update-products.service';

describe('UpdateProductsService', () => {
  let service: UpdateProductsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UpdateProductsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
