import { NgModule } from '@angular/core';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { DialogModule } from 'primeng/dialog';
import { InputTextModule } from 'primeng/inputtext';
import { TableModule } from 'primeng/table';
import { TabMenuModule } from 'primeng/tabmenu';

@NgModule({
  exports: [
    CardModule,
    TableModule,
    ButtonModule,
    InputTextModule,
    AutoCompleteModule,
    TabMenuModule,
    DialogModule,
  ],
})
export class AppPrimengModule {}
