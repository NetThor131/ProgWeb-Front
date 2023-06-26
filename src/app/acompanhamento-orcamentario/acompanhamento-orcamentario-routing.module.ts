import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AcompanhamentoOrcamentarioComponent } from './acompanhamento-orcamentario.component';

const routes: Routes = [
  { path: '', component: AcompanhamentoOrcamentarioComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AcompanhamentoOrcamentarioRoutingModule {}
