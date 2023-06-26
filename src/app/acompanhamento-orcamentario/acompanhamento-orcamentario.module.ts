import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { AppMaterialModule } from '../shared/app-material';
import { AcompanhamentoOrcamentarioRoutingModule } from './acompanhamento-orcamentario-routing.module';
import { AcompanhamentoOrcamentarioComponent } from './acompanhamento-orcamentario.component';

@NgModule({
  imports: [
    CommonModule,
    AcompanhamentoOrcamentarioRoutingModule,
    AppMaterialModule,
    ReactiveFormsModule
  ],
  declarations: [AcompanhamentoOrcamentarioComponent],
})
export class AcompanhamentoOrcamentarioModule {}
