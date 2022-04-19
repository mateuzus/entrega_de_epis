import { TestBed } from '@angular/core/testing';

import { ConsultaEpisEntreguesService } from './consulta-epis-entregues.service';

describe('ConsultaEpisEntreguesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ConsultaEpisEntreguesService = TestBed.get(ConsultaEpisEntreguesService);
    expect(service).toBeTruthy();
  });
});
