import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppMaterialModule } from '../shared/app-material';
import { AppPrimengModule } from '../shared/app-primeng';
import { AcompanhamentoOrcamentarioRoutingModule } from './acompanhamento-orcamentario-routing.module';
import { AcompanhamentoOrcamentarioComponent } from './acompanhamento-orcamentario.component';
import { FormAcompanhamentoOrcamentarioComponent } from './form-acompanhamento-orcamentario/form-acompanhamento-orcamentario.component';
import { AcompanhamentoOrcamentarioService } from './services';
import { FormAcompanhamentoOrcamentarioComponent } from './form-acompanhamento-orcamentario/form-acompanhamento-orcamentario.component';

@NgModule({
  imports: [
    CommonModule,
    AcompanhamentoOrcamentarioRoutingModule,
    AppMaterialModule,
    ReactiveFormsModule,
    AppPrimengModule,
    FormsModule,
  ],
  declarations: [
    AcompanhamentoOrcamentarioComponent,
    FormAcompanhamentoOrcamentarioComponent,
  ],
  providers: [AcompanhamentoOrcamentarioService],
})
export class AcompanhamentoOrcamentarioModule {}
