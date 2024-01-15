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
    // remove text and border that is displayed when a diagram is not generated yet
    document.getElementById("noDiagGen")!.style.display = "none";
    document.getElementById("plot")!.style.borderStyle = "none";

    this.plot.plotHistMR("lol", "plot");
  }

  changeDisplayFilter(id: string) {
    if (document.getElementById(id)!.style.display === "none") {
      document.getElementById(id)!.style.display = "block"
    }
    else {
      document.getElementById(id)!.style.display = "none"
    }
  }
}
