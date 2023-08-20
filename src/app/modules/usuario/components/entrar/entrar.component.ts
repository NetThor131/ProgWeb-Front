import { Component } from '@angular/core';

import { UsuarioService } from '../../services';

@Component({
  selector: 'app-entrar',
  templateUrl: './entrar.component.html',
})
export class EntrarComponent {
  usuario: string = '';
  senha: string = '';

  constructor(private usuarioService: UsuarioService) {}

  entrar() {
    this.usuarioService.login(this.usuario, this.senha);
  }
}
