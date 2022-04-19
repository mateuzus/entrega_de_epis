import { TestBed } from '@angular/core/testing';

import { BiometricCrudService } from './biometric-crud.service';

describe('BiometricCrudService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BiometricCrudService = TestBed.get(BiometricCrudService);
    expect(service).toBeTruthy();
  });
});
