import { TestBed } from '@angular/core/testing';

import { ComparendosService } from './comparendos.service';

describe('ComparendosService', () => {
  let service: ComparendosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ComparendosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
