import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GaugesComponent } from '@app/gauges/gauges.component';

const routes: Routes = [
  {path:'Gauges', component:GaugesComponent}
  
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports:[RouterModule],
})
export class GaugesRouterModule { }
