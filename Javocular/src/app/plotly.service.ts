import { Injectable } from '@angular/core';
import {JsonDataService} from "./json-data.service";

declare let Plotly: any;

@Injectable({
  providedIn: 'root'
})
export class PlotlyService {
  constructor(private dataService: JsonDataService) { }

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

  plotCIMRJson(title: string, plotDiv: string, tables: string[], excAuthors: string[]) {
    this.dataService.getAuthorsCIMR().subscribe(data => {
      let authors: string[] = [];
      let values: number[][] = [];

      console.log('Authors data:', data);

      // Assuming data is an object with properties corresponding to authors
      for (let author in data) {
        if (data.hasOwnProperty(author)) {
          authors.push(author);
          values.push(Object.values(data[author]));
        }
      }

      let traceCom = {
        x: values.map(authorValues => authorValues[0]),
        y: authors,
        type: 'bar',
        orientation: "h",
        name: "commits"
      };
      let traceIss = {
        x: values.map(authorValues => authorValues[1]),
        y: authors,
        type: 'bar',
        orientation: "h",
        name: "issues"
      };
      let traceMergR = {
        x: values.map(authorValues => authorValues[2]),
        y: authors,
        type: 'bar',
        orientation: "h",
        name: "merge requests"
      };

      let layout = {
        title: title,
        barmode: "stack"
      };

      Plotly.newPlot(plotDiv, [traceCom, traceIss, traceMergR], layout);
    });
  }



  plotHistMR() {

  }

}
