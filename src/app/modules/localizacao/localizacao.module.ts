import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { LocalizacaoComponent } from './localizacao';
import { LocalizacaoRoutingModule } from './localizacao-routing.modules';

@NgModule({
  declarations: [LocalizacaoComponent],
  imports: [CommonModule, LocalizacaoRoutingModule],
})
export class LocalizacaoModule {}
