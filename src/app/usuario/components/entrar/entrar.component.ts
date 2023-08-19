import { Component } from '@angular/core';

import { UsuarioService } from '../../services';
import { Router } from '@angular/router';

@Component({
  selector: 'app-entrar',
  templateUrl: './entrar.component.html',
})
export class EntrarComponent {
  usuario: string = '';
  senha: string = '';

  constructor(private usuarioService: UsuarioService, private router: Router) {}

  entrar() {
    this.usuarioService.login(this.usuario, this.senha);

    this.router.navigate(['acompanhamento-orcamentario']);
  }
}
