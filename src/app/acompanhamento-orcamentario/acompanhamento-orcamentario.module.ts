import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { AcompanhamentoOrcamentarioRoutingModule } from './acompanhamento-orcamentario-routing.module';
import { AcompanhamentoOrcamentarioComponent } from './acompanhamento-orcamentario.component';

@NgModule({
  imports: [CommonModule, AcompanhamentoOrcamentarioRoutingModule],
  declarations: [AcompanhamentoOrcamentarioComponent],
})
export class AcompanhamentoOrcamentarioModule {}
