import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cadastrar',
  templateUrl: './cadastrar.component.html',
})
export class CadastrarComponent implements OnInit {
  nome: string | undefined;
  sobrenome: string | undefined;
  usuario: string | undefined;
  email: string | undefined;
  senha: string | undefined;

  constructor() {}

  ngOnInit(): void {}
}
