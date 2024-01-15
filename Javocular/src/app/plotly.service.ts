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

  groupCIMR(title: string, table: string, plotDiv: string) {
    let authors = this.getAuthorNames();

    this.dataService.getAuthorsCIMR().subscribe(data => {
      let count = authors.filter(author => data[author][table] > 0).length;

      let trace = {
        x: [count],
        y: [table],
        type: 'bar',
        orientation: "h",
        name: `${table} group`
      };

      let layout = {
        title: title,
        barmode: "stack"
      };

      Plotly.newPlot(plotDiv, [trace], layout);
    });
  }


  plotHistMR(title: string, plotDiv: string) {
    this.dataService.getHistogramData().subscribe(data => {
      var mergeRequestNames = Object.keys(data);

      var linesOfCodeAdded = mergeRequestNames.map(function (mr) { return data[mr]["linesOfCodeAdded"]; });
      var linesOfCodeDeleted = mergeRequestNames.map(function (mr) { return data[mr]["linesOfCodeDeleted"]; });
      var startDates = mergeRequestNames.map(function (mr) { return data[mr]["startDate"]; });
      var endDates = mergeRequestNames.map(function (mr) { return data[mr]["endDate"]; });

      var dateDiffs = startDates.map(function (start, index) {
        var startDate = new Date(start);
        var endDate = new Date(endDates[index]);
        return Math.abs(endDate.getTime() - startDate.getTime()); // Difference is in milliseconds
      });

      var trace1 = {
        x: endDates,
        y: linesOfCodeAdded,
        type: 'bar',
        name: 'Request End Date',
        width: 86400000 * 9,
        bargap: 0
      };

      var trace2 = {
        x: dateDiffs,
        y: linesOfCodeAdded,
        type: 'bar',
        name: 'Date Difference from Start',
        base: startDates,
        orientation: 'h',
        width: 10
      };

      data = [trace1, trace2];

      var layout = {
        title: 'Lines of Code Added vs. Request Dates',
        xaxis: {
          title: 'Date',
          type: 'date',
          showgrid: true,
          showline: true
        },
        yaxis: {
          title: 'Lines of Code Added',
          showgrid: true,
          showline: true
        },
        dragmode: 'pan', // Enable pan/drag functionality
      };

      // Create the plot
      Plotly.newPlot(plotDiv, data, layout);
    });
  }

}
