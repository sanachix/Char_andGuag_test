import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChartsComponent } from '@app/charts/charts.component';
import { ChartsRouterModule } from '@app/charts/charts-router.module';
import { DxChartModule, DxButtonModule, DxPieChartModule } from 'devextreme-angular';
import { ChartsService } from '@app/charts/charts.service';

@NgModule({
  imports: [
    CommonModule,
    ChartsRouterModule,
    DxChartModule,
    DxButtonModule,
    DxPieChartModule
  
  ],

  declarations: [
    ChartsComponent,
  ],
  providers:[ChartsService]

  //exports:[ChartsComponent]


})
export class ChartsModule { }
