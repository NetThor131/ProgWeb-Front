/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { AcompanhamentoOrcamentarioService } from './acompanhamento-orcamentario.service';

describe('Service: AcompanhamentoOrcamentario', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AcompanhamentoOrcamentarioService]
    });
  });

  it('should ...', inject([AcompanhamentoOrcamentarioService], (service: AcompanhamentoOrcamentarioService) => {
    expect(service).toBeTruthy();
  }));
});
