import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'acompanhamento-orcamentario',
  },
  {
    path: 'acompanhamento-orcamentario',
    loadChildren: () =>
      import('./acompanhamento-orcamentario').then(
        (m) => m.AcompanhamentoOrcamentarioModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
