import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { PerguntasRoutingModule } from './perguntas-routing.module';
import { PerguntasComponent } from './perguntas/perguntas.component';

@NgModule({
  declarations: [PerguntasComponent],
  imports: [CommonModule, PerguntasRoutingModule],
})
export class PerguntasModule {}
