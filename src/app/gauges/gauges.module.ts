import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GaugesComponent } from '@app/gauges/gauges.component';
import { GaugesRouterModule } from '@app/gauges/gauges-router.module';
import { DxBarGaugeModule, DxCircularGaugeModule, DxLinearGaugeModule, DxSliderModule } from '../../../node_modules/devextreme-angular';

@NgModule({
  imports: [
    CommonModule,
    GaugesRouterModule,
    DxBarGaugeModule,
    DxCircularGaugeModule,
    DxLinearGaugeModule,
    DxSliderModule
  ],
  declarations: [GaugesComponent]
})
export class GaugesModule { }
