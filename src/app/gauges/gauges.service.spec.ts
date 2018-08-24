import { TestBed, inject } from '@angular/core/testing';

import { GaugesService } from './gauges.service';

describe('GaugesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GaugesService]
    });
  });

  it('should be created', inject([GaugesService], (service: GaugesService) => {
    expect(service).toBeTruthy();
  }));
});
