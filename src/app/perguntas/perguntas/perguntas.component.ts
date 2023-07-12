import { Component, OnInit } from '@angular/core';

import { PerguntasService } from '../perguntas.service';

@Component({
  selector: 'app-perguntas',
  templateUrl: './perguntas.component.html',
  styleUrls: ['./perguntas.component.css'],
})
export class PerguntasComponent implements OnInit {
  data: any;
  constructor(private service: PerguntasService) {}

  ngOnInit(): void {}

  solution(nrQuestao: number) {
    this.data = this.service.consulta(nrQuestao);
  }
}
