import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-entrar',
  templateUrl: './entrar.component.html',
})
export class EntrarComponent implements OnInit {
  usuario: string | undefined;
  senha: string | undefined;

  constructor() {}

  ngOnInit(): void {}
}
