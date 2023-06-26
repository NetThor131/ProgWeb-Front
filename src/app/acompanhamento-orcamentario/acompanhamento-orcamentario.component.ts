import { Component, OnInit } from '@angular/core';

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
  constructor() {}

  ngOnInit() {}
}
