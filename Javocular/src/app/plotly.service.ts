import { Injectable } from '@angular/core';
import {JsonDataService} from "./json-data.service";

declare let Plotly: any;

@Injectable({
  providedIn: 'root'
})
export class PlotlyService {
  constructor(private dataService: JsonDataService) { }

  getAuthorNames() {
    let authors: string[] = [];
    this.dataService.getAuthorsCIMR().subscribe(data => {

      console.log('Authors data:', data);

      // Assuming data is an object with properties corresponding to authors
      for (let author in data) {
        if (data.hasOwnProperty(author)) {
          authors.push(author);
        }
      }
    });
    return authors;
  }

  plotCIMRJson(title: string, plotDiv: string, tables: string[], excAuthors: string[]) {
    let authors: string[] = this.getAuthorNames();
    let filteredAuthors: string[] = [];

    this.dataService.getAuthorsCIMR().subscribe(data => {
      let values: number[][] = [];

      // Assuming data is an object with properties corresponding to authors
      for (let author in data) {
        if (data.hasOwnProperty(author) && !excAuthors.includes(author)) {
          values.push(Object.values(data[author]));
          filteredAuthors.push(author.toString());
          console.log(author);
        }
      }

      let traceCom = {
        x: values.map(authorValues => authorValues[0]),
        y: filteredAuthors,
        type: 'bar',
        orientation: "h",
        name: "commits"
      };
      let traceIss = {
        x: values.map(authorValues => authorValues[1]),
        y: filteredAuthors,
        type: 'bar',
        orientation: "h",
        name: "issues"
      };
      let traceMergR = {
        x: values.map(authorValues => authorValues[2]),
        y: filteredAuthors,
        type: 'bar',
        orientation: "h",
        name: "merge requests"
      };

      let traces: any[] = [];

      if (tables.includes("commits")) {
        traces.push(traceCom);
      }
      if (tables.includes("issues")) {
        traces.push(traceIss);
      }
      if (tables.includes("mergeRequests")) {
        traces.push(traceMergR);
      }

      let layout = {
        title: title,
        barmode: "stack"
      };

      Plotly.newPlot(plotDiv, traces, layout);
    });
  }



  plotHistMR() {

  }

}
