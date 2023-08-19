import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AppPrimengModule } from 'src/app/shared/app-primeng';

import { PerguntasRoutingModule } from './perguntas-routing.module';
import { PerguntasService } from './perguntas.service';
import { PerguntasComponent } from './perguntas/perguntas.component';

@NgModule({
  declarations: [PerguntasComponent],
  imports: [CommonModule, PerguntasRoutingModule, AppPrimengModule],
  providers: [PerguntasService],
})
export class PerguntasModule {}
