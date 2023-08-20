import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {
  items: MenuItem[] = [];

  activeItem!: MenuItem;

  constructor() {}

  ngOnInit() {
    this.items = [
      {
        label: 'Cadastrar Usuário',
        routerLink: 'login/cadastrar',
      },
      {
        label: 'Acompanhamento Orçamentário',
        routerLink: 'acompanhamento-orcamentario',
      },
      { label: 'Perguntas', routerLink: 'perguntas' },
      { label: 'Localização', routerLink: 'localizacao' },
      // { label: 'Orgão' },
      // { label: 'SubFunções' },
      // { label: 'Unidade Orçamentária' },
    ];

    this.activeItem = this.items[0];
  }
}
