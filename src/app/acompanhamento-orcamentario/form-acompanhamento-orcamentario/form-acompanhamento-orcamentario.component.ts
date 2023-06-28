import { Component } from '@angular/core';

import { AcompanhamentoOrcamentarioService } from '../services';
import { Observable, catchError, of } from 'rxjs';
import { AcompanhamentoOrcamentario } from '../acompanhamento-orcamentario.component';

@Component({
  selector: 'app-form-acompanhamento-orcamentario',
  templateUrl: './form-acompanhamento-orcamentario.component.html',
  styleUrls: ['./form-acompanhamento-orcamentario.component.css'],
})
export class FormAcompanhamentoOrcamentarioComponent {
  descricaoFuncao: string = '';
  descricaosubFuncao: string = '';
  tituloAcao: string = '';
  descricaoOrgao: string = '';
  tituloPrograma: string = '';
  tipoPrograma: string = '';
  descricaolocalizador: string = '';
  descricaoUnidadeOrcamentaria: string = '';

  data$: Observable<AcompanhamentoOrcamentario[]> = of([]);

  constructor(private service: AcompanhamentoOrcamentarioService) {}

  onBuscar() {
    let parameters = {
      descricaoFuncao: this.descricaoFuncao,
      descricaosubFuncao: this.descricaosubFuncao,
      tituloAcao: this.tituloAcao,
      descricaoOrgao: this.descricaoOrgao,
      tituloPrograma: this.tituloPrograma,
      tipoPrograma: this.tipoPrograma,
      descricaolocalizador: this.descricaolocalizador,
      descricaoUnidadeOrcamentaria: this.descricaoUnidadeOrcamentaria,
    };

    this.data$ = this.service.listWithParameters(parameters).pipe(
      catchError((error) => {
        console.log('Erro ao carregar cursos.');
        return of([]);
      })
    );
  }

  onCancelar() {
    this.descricaoFuncao = '';
    this.descricaosubFuncao = '';
    this.tituloAcao = '';
    this.descricaoOrgao = '';
    this.tituloPrograma = '';
    this.tipoPrograma = '';
    this.descricaolocalizador = '';
    this.descricaoUnidadeOrcamentaria = '';
  }
}
