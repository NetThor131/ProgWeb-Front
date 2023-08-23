import { NgModule } from '@angular/core';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { DialogModule } from 'primeng/dialog';
import { GMapModule } from 'primeng/gmap';
import { InputTextModule } from 'primeng/inputtext';
import { PasswordModule } from 'primeng/password';
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
    PasswordModule,
    GMapModule, //AIzaSyDvyNVPb3kEm2oSNVelG4yhUahokeScDxw
  ],
})
export class AppPrimengModule {}
