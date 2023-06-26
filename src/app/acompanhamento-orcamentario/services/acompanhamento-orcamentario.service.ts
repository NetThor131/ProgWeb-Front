import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { first, tap } from 'rxjs';

import { AcompanhamentoOrcamentario } from '../acompanhamento-orcamentario.component';

@Injectable()
export class AcompanhamentoOrcamentarioService {
  private readonly API = 'api/AcompanhamentoOrcamentario';

  constructor(private httpClient: HttpClient) {}

  list() {
    return this.httpClient
      .get<AcompanhamentoOrcamentario[]>(`${this.API}/ObterTodos`)
      .pipe(
        first(),
        tap((result) => console.log(result))
      );
  }
}
