import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'login',
  },
  {
    path: 'login',
    loadChildren: () => import('./usuario').then((m) => m.UsuarioModule),
  },
  {
    path: 'acompanhamento-orcamentario',
    loadChildren: () =>
      import('./acompanhamento-orcamentario').then(
        (m) => m.AcompanhamentoOrcamentarioModule
      ),
  },
  {
    path: 'perguntas',
    loadChildren: () => import('./perguntas').then((m) => m.PerguntasModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
