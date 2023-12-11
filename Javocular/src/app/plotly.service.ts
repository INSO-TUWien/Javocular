import { Injectable } from '@angular/core';

declare let Plotly: any;

@Injectable({
  providedIn: 'root'
})
export class PlotlyService {
  constructor() { }

  plotLine(title: string, plotDiv: string, x:number[], y:number[]){
    let trace = {
      x: x,
      y: y,
      type: 'scatter'
    };

    let layout = {
      title:title
    };

    Plotly.newPlot(plotDiv, [trace], layout);
  }

  plotCIMR(title: string, plotDiv: string, x:number[][], y:string[]) {
    let traceCom = {
      x: x[0],
      y: y,
      type: 'bar',
      orientation: "h",
      name: "commits"
    };
    let traceIss = {
      x: x[1],
      y: y,
      type: 'bar',
      orientation: "h",
      name: "issues"
    };
    let traceMergR = {
      x: x[2],
      y: y,
      type: 'bar',
      orientation: "h",
      name: "merge requests"
    };

    let layout = {
      title: title,
      barmode: "stack"
    };

    Plotly.newPlot(plotDiv, [traceCom, traceIss, traceMergR], layout);
  }

}
