import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppPrimengModule } from '../shared/app-primeng';
import { CadastrarComponent } from './components/cadastrar';
import { EntrarComponent } from './components/entrar';
import { UsuarioService } from './services';
import { UsuarioRoutingModule } from './usuario-routing.module';

@NgModule({
  declarations: [EntrarComponent, CadastrarComponent],
  imports: [CommonModule, UsuarioRoutingModule, AppPrimengModule, FormsModule],
  providers: [UsuarioService],
})
export class UsuarioModule {}
