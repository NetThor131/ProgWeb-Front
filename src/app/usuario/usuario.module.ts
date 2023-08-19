import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { CadastrarComponent } from './cadastrar';
import { EntrarComponent } from './entrar';
import { UsuarioRoutingModule } from './usuario-routing.module';

@NgModule({
  declarations: [EntrarComponent, CadastrarComponent],
  imports: [CommonModule, UsuarioRoutingModule],
})
export class UsuarioModule {}
