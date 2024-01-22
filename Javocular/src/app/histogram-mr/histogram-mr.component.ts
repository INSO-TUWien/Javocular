import { Component } from '@angular/core';
import {PlotlyService} from "../plotly.service";

@Component({
  selector: 'app-histogram-mr',
  templateUrl: './histogram-mr.component.html',
  styleUrls: ['./histogram-mr.component.css']
})
export class HistogramMrComponent {
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
