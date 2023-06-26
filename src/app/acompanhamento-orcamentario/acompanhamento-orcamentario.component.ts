import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { catchError, Observable, of } from 'rxjs';

import { AcompanhamentoOrcamentarioService } from './services';

export interface AcompanhamentoOrcamentario {
  id: number;
  exercicio: string;
  tipoCaptacao: string;
  descricaoEsfera: string;
  descricaoOrgao: string;
  descricaoUnidadeOrcamentaria: string;
  descricaoFuncao: string;
  descricaosubFuncao: string;
  tituloPrograma: string;
  tipoPrograma: string;
  tituloAcao: string;
  descricaoProduto: string;
  descricaoUnidademedida: string;
  descricaolocalizador: string;
  qtdMetaLoa: string;
  projetoLei: string;
  dotacaoInicial: string;
  autorizado: string;
  empenhado: string;
  liquidado: string;
  reprogramadoFisico: string;
  reprogramadoFinanceiro: string;
  realizadoLoa: string;
  pago: string;
}

export interface AcompanhamentoOrcamentario {
  id: number;
  exercicio: string;
  tipoCaptacao: string;
  descricaoEsfera: string;
  descricaoOrgao: string;
  descricaoUnidadeOrcamentaria: string;
  descricaoFuncao: string;
  descricaosubFuncao: string;
  tituloPrograma: string;
  tipoPrograma: string;
  tituloAcao: string;
  descricaoProduto: string;
  descricaoUnidademedida: string;
  descricaolocalizador: string;
  qtdMetaLoa: string;
  projetoLei: string;
  dotacaoInicial: string;
  autorizado: string;
  empenhado: string;
  liquidado: string;
  reprogramadoFisico: string;
  reprogramadoFinanceiro: string;
  realizadoLoa: string;
  pago: string;
}

@Component({
  selector: 'app-acompanhamento-orcamentario',
  templateUrl: './acompanhamento-orcamentario.component.html',
  styleUrls: ['./acompanhamento-orcamentario.component.css'],
})
export class AcompanhamentoOrcamentarioComponent implements OnInit {
  data$: Observable<AcompanhamentoOrcamentario[]>;
  displayedColumns = [
    'id',
    'exercicio',
    'tipoCaptacao',
    'descricaoEsfera',
    'descricaoOrgao',
    'descricaoUnidadeOrcamentaria',
    'descricaoFuncao',
    'descricaosubFuncao',
    'tituloPrograma',
    'tipoPrograma',
    'tituloAcao',
    'descricaoProduto',
    'descricaoUnidademedida',
    'descricaolocalizador',
    'qtdMetaLoa',
    'projetoLei',
    'dotacaoInicial',
    'autorizado',
    'empenhado',
    'liquidado',
    'reprogramadoFisico',
    'reprogramadoFinanceiro',
    'realizadoLoa',
    'pago',
  ];

  constructor(
    private service: AcompanhamentoOrcamentarioService,
    private router: Router
  ) {
    this.data$ = this.service.list().pipe(
      catchError((error) => {
        console.log('Erro ao carregar cursos.');
        return of([]);
      })
    );
  }

  ngOnInit() {}

  goToForm() {
    this.router.navigate(['/buscar']);
  }
}
