import { TestBed, inject } from '@angular/core/testing';

import { LocateGeocacheService } from './locate-geocache.service';

describe('LocateGeocacheService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LocateGeocacheService]
    });
  });

  it('should ...', inject([LocateGeocacheService], (service: LocateGeocacheService) => {
    expect(service).toBeTruthy();
  }));
});
