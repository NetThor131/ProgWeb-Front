import { NgModule } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';

@NgModule({
  exports: [MatInputModule, MatTableModule],
})
export class AppMaterialModule {}
