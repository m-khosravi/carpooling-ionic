import { TestBed } from '@angular/core/testing';

import { PassengersService } from './passengers.service';

describe('PassengersService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PassengersService = TestBed.get(PassengersService);
    expect(service).toBeTruthy();
  });
});
