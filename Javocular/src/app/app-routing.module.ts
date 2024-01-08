import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent} from "./home/home.component";
import {BarcharCIMRComponent} from "./barchart-CIMR/barchar-CIMR.component";

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'graphs', component: BarcharCIMRComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
