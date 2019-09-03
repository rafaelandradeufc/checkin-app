import { TestBed } from '@angular/core/testing';

import { PresencaService } from './presenca.service';

describe('PresencaService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PresencaService = TestBed.get(PresencaService);
    expect(service).toBeTruthy();
  });
});
