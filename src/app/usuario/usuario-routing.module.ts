import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CadastrarComponent } from './cadastrar';
import { EntrarComponent } from './entrar';

const routes: Routes = [
  { path: '', component: EntrarComponent },
  { path: 'cadastrar', component: CadastrarComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UsuarioRoutingModule {}
