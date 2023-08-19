import { Component, OnInit } from '@angular/core';

import { PerguntasService } from '../perguntas.service';

@Component({
  selector: 'app-perguntas',
  templateUrl: './perguntas.component.html',
  styleUrls: ['./perguntas.component.css'],
})
export class PerguntasComponent implements OnInit {
  dados: any[] = [];
  data: any[] = [];

  displayBasic: boolean = false;
  header: string = '';

  cols: any[] = [];

  constructor(private service: PerguntasService) {}

  ngOnInit(): void {}

  showBasicDialog() {
    this.displayBasic = true;
  }

  solution(nrQuestao: number) {
    this.service.consulta(nrQuestao).subscribe((response) => {
      this.dados = response;
      console.log(response);
    });

    switch (nrQuestao) {
      case 1:
        this.cols = [
          { field: 'descricaoFuncao', header: 'Função', tipo: 'string' },
          { field: 'soma', header: 'Valor Gasto', tipo: 'number' },
        ];

        this.showBasicDialog();
        break;
      case 2:
        this.cols = [
          { field: 'acao', header: 'Despesas Médicas', tipo: 'number' },
          {
            field: 'hospitais',
            header: 'Reforma de Hospitais',
            tipo: 'number',
          },
        ];

        this.showBasicDialog();
        break;
      case 3:
        this.cols = [
          { field: 'descricaoFuncao', header: 'Função', tipo: 'string' },
          { field: 'soma', header: 'Valor Gasto', tipo: 'number' },
        ];

        this.showBasicDialog();
        break;
      case 4:
        this.cols = [
          { field: 'geral', header: 'Gasto Geral', tipo: 'number' },
          { field: 'especifico', header: 'Gasto com a UFS', tipo: 'number' },
        ];

        this.showBasicDialog();
        break;
      case 5:
        this.cols = [
          { field: 'geral', header: 'Gasto Geral', tipo: 'number' },
          { field: 'especifico', header: 'Saúde de Sergipe', tipo: 'number' },
        ];

        this.showBasicDialog();
        break;
      case 6:
        this.cols = [
          { field: 'descricaoFuncao', header: 'Função', tipo: 'string' },
          { field: 'soma', header: 'Valor Gasto', tipo: 'number' },
        ];

        this.showBasicDialog();
        break;
      case 7:
        this.cols = [
          { field: 'descricaoSubFuncao', header: 'Função', tipo: 'string' },
          { field: 'soma', header: 'Valor Gasto', tipo: 'number' },
        ];

        this.showBasicDialog();
        break;
      case 8:
        this.cols = [
          {
            field: 'descricaoUnidadeOrcamentaria',
            header: 'Universidade',
            tipo: 'string',
          },
          { field: 'soma', header: 'Valor Gasto', tipo: 'number' },
        ];

        this.showBasicDialog();
        break;
      case 9:
        this.cols = [
          { field: 'geral', header: 'Gasto Geral', tipo: 'number' },
          { field: 'especifico', header: 'Tribunal', tipo: 'number' },
        ];

        this.showBasicDialog();
        break;
      case 10:
        this.cols = [
          { field: 'descricaoEsfera', header: 'Esfera', tipo: 'string' },
          { field: 'soma', header: 'Valor Gasto', tipo: 'number' },
        ];

        this.showBasicDialog();
        break;
    }
  }
}
