import { NgModule } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { InputTextModule } from 'primeng/inputtext';
import { TableModule } from 'primeng/table';

@NgModule({
  exports: [CardModule, TableModule, ButtonModule, InputTextModule],
})
export class AppPrimengModule {}
