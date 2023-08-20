import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { LocalizacaoService } from 'src/app/core/services';
import { AppPrimengModule } from 'src/app/shared/app-primeng';

import { LocalizacaoComponent } from './localizacao';
import { LocalizacaoRoutingModule } from './localizacao-routing.modules';

@NgModule({
  declarations: [LocalizacaoComponent],
  imports: [CommonModule, LocalizacaoRoutingModule, AppPrimengModule],
  providers: [LocalizacaoService],
})
export class LocalizacaoModule {}
