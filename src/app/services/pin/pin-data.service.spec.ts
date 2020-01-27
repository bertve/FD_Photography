import { TestBed } from '@angular/core/testing';

import { PinDataService } from './pin-data.service';

describe('PinDataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PinDataService = TestBed.get(PinDataService);
    expect(service).toBeTruthy();
  });
});
