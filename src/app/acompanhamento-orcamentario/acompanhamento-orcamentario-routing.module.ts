import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AcompanhamentoOrcamentarioComponent } from './acompanhamento-orcamentario.component';
import { FormAcompanhamentoOrcamentarioComponent } from './form-acompanhamento-orcamentario';

const routes: Routes = [
  { path: '', component: AcompanhamentoOrcamentarioComponent },
  { path: 'buscar', component: FormAcompanhamentoOrcamentarioComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AcompanhamentoOrcamentarioRoutingModule {}
