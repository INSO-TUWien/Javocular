import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent} from "./home/home.component";
import {BarcharCIMRComponent} from "./barchart-CIMR/barchar-CIMR.component";
import {HistogramMrComponent} from "./histogram-mr/histogram-mr.component";

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'barchart', component: BarcharCIMRComponent},
  {path: 'histogram', component: HistogramMrComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
