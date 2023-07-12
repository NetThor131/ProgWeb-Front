import { Component, OnInit } from '@angular/core';

import { PerguntasService } from '../perguntas.service';

@Component({
  selector: 'app-perguntas',
  templateUrl: './perguntas.component.html',
  styleUrls: ['./perguntas.component.css'],
})
export class PerguntasComponent implements OnInit {
  data: any = null;

  displayBasic: boolean = false;

  cols: any[] = [];

  constructor(private service: PerguntasService) {}

  ngOnInit(): void {}

  showBasicDialog() {
    this.displayBasic = true;
  }

  solution(nrQuestao: number) {
    this.data = this.service.consulta(nrQuestao);

    switch (nrQuestao) {
      case 1:
        this.cols = [
          { field: 'descricaoFuncao', header: 'Função' },
          { field: 'soma', header: 'Valor Gasto' },
        ];
        break;
    }

    this.showBasicDialog();
  }
}
