import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { first, tap } from 'rxjs';

import { AcompanhamentoOrcamentario } from '../acompanhamento-orcamentario.component';
import { environment } from 'src/environments/environment';

@Injectable()
export class AcompanhamentoOrcamentarioService {
  private readonly API = 'AcompanhamentoOrcamentario';

  constructor(private httpClient: HttpClient) {}

  list() {
    return this.httpClient.get<AcompanhamentoOrcamentario[]>(
      `${environment.BASE_URL}/${this.API}/ObterTodos`
    );
  }

  listWithParameters(parameter: any) {
    let params = {
      descricaoFuncao: parameter.descricaoFuncao,
      descricaosubFuncao: parameter.descricaosubFuncao,
      tituloAcao: parameter.tituloAcao,
      descricaoOrgao: parameter.descricaoOrgao,
      tituloPrograma: parameter.tituloPrograma,
      tipoPrograma: parameter.tipoPrograma,
      descricaolocalizador: parameter.descricaolocalizador,
      descricaoUnidadeOrcamentaria: parameter.descricaoUnidadeOrcamentaria,
    };

    return this.httpClient.get<AcompanhamentoOrcamentario[]>(
      `${environment.BASE_URL}/${this.API}/ObterTodos`,
      {
        params,
      }
    );
  }
}
