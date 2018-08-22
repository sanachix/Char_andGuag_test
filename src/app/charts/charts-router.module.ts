import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ChartsComponent } from '@app/charts/charts.component';

const routes: Routes = [
  {path:'Charts', component:ChartsComponent}
  
];

@NgModule({
  imports: [
  RouterModule.forChild(routes)
  ],
  exports:[RouterModule],
})
export class ChartsRouterModule { }
