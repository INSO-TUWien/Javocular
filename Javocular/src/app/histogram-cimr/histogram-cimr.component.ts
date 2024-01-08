import { Component } from '@angular/core';
import {PlotlyService} from "../plotly.service";

@Component({
  selector: 'app-histogram-cimr',
  templateUrl: './histogram-cimr.component.html',
  styleUrls: ['./histogram-cimr.component.css']
})
export class HistogramCIMRComponent {
  constructor(private plot:PlotlyService) {  }

  plotHistogramCMIRJson() {
    this.plot.plotHistMR("lol", "plot");
  }
}
