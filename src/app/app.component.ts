import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  items: MenuItem[] = [];

  activeItem!: MenuItem;

  ngOnInit() {
    this.items = [
      {
        label: 'Acompanhamento Orçamentário',
        routerLink: 'acompanhamento-orcamentario',
      },
      // { label: 'Orgão' },
      // { label: 'SubFunções' },
      // { label: 'Unidade Orçamentária' },
    ];

    this.activeItem = this.items[0];
  }
}
