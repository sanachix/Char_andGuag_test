import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChartsComponent } from '@app/charts/charts.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ChartsComponent],

  exports:[ChartsComponent]


})
export class ChartsModule { }
