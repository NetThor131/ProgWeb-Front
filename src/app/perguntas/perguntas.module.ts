import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { AppPrimengModule } from '../shared/app-primeng';
import { PerguntasRoutingModule } from './perguntas-routing.module';
import { PerguntasComponent } from './perguntas/perguntas.component';

@NgModule({
  declarations: [PerguntasComponent],
  imports: [CommonModule, PerguntasRoutingModule, AppPrimengModule],
})
export class PerguntasModule {}
