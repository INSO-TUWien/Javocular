import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent} from "./home/home.component";
import {PlotlyComponentComponent} from "./plotly-component/plotly-component.component";

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'graphs', component: PlotlyComponentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
