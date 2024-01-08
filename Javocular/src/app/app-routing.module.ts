import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent} from "./home/home.component";
import {BarcharCIMRComponent} from "./barchart-CIMR/barchar-CIMR.component";
import {HistogramCIMRComponent} from "./histogram-cimr/histogram-cimr.component";

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'barchart', component: BarcharCIMRComponent},
  {path: 'histogram', component: HistogramCIMRComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
