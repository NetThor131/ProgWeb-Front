import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { UsuarioService } from '../../services';

@Component({
  selector: 'app-cadastrar',
  templateUrl: './cadastrar.component.html',
})
export class CadastrarComponent {
  nome: string = '';
  sobrenome: string = '';
  usuario: string = '';
  email: string = '';
  senha: string = '';

  constructor(private usuarioService: UsuarioService, private router: Router) {}

  cadastrar() {
    return this.usuarioService
      .cadastro(this.usuario, this.email, this.senha)
      .subscribe((response) => {
        // console.log(response);

        this.router.navigate(['login']);
      });
  }
}
