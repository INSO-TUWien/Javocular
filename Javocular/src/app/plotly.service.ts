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

  getAuthorNamesAPI() {
    let authors: string[] = [];
    this.dataService.getAuthorsCIMRAPI().subscribe(data => {

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

  getMergeRequestNames() {
    let mergeRequests: string[] = [];
    this.dataService.getHistogramData().subscribe(data => {
      for (let mr in data) {
        mergeRequests.push(mr);
      }
    });
    return mergeRequests;
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

  plotCIMRJsonAPI(title: string, plotDiv: string, tables: string[], excAuthors: string[]) {
    let authors: string[] = this.getAuthorNamesAPI();
    let filteredAuthors: string[] = [];

    this.dataService.getAuthorsCIMRAPI().subscribe(data => {
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


  plotHistMR(title: string, plotDiv: string, excMerges: string[], startDate: string, endDate: string) {
    this.dataService.getHistogramData().subscribe(data => {
      var mergeRequestNames = Object.keys(data);
      let filteredMerges: string[] = [];

      for (let mrName in data) {
        if (data.hasOwnProperty(mrName) && !excMerges.includes(mrName)) {
          const mr = data[mrName];
          if ((mr["startDate"] >= startDate && mr["endDate"] <= endDate) ||
              (startDate.length == 0 && endDate.length == 0) ||
              (startDate.length == 0 && mr["endDate"] <= endDate) ||
              (endDate.length == 0 && mr["startDate"] >= startDate)) {
            filteredMerges.push(mrName);
          }
        }
      }

      var linesOfCodeAdded = filteredMerges.map(function (mr) { return data[mr]["linesOfCodeAdded"]; });
      var linesOfCodeDeleted = filteredMerges.map(function (mr) { return data[mr]["linesOfCodeDeleted"]; });
      var startDates = filteredMerges.map(function (mr) { return data[mr]["startDate"]; });
      var endDates = filteredMerges.map(function (mr) { return data[mr]["endDate"]; });

      var dateDiffs = startDates.map(function (start, index) {
        var startDate = new Date(start);
        var endDate = new Date(endDates[index]);
        return Math.abs(endDate.getTime() - startDate.getTime()); // Difference is in milliseconds
      });

      var numberOfBars = filteredMerges.length;
      var barColors: string[] = this.getBarColors(numberOfBars);

      var maxVal = linesOfCodeAdded.reduce((a, b) => Math.max(a, b), 0) + 50;

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
          rangemode: 'fixed',
          range: [0, maxVal],
          showline: true
        },
        dragmode: 'pan', // Enable pan/drag functionality
        showLegend: false
      };

      var trace1 = {
        x: endDates,
        y: linesOfCodeAdded.map((value, index) => value + linesOfCodeDeleted[index]), // add the current value that is being used for the offset to the lines of code added to make up for the offset
        type: 'bar',
        name: 'Request End Date',
        width: 86400000 * 9,
        offset: -86400000 * 9,
        marker: {
          color: barColors
        },
        showlegend: false,
        base: linesOfCodeDeleted.map((value, index) => -value)  // Use the negative values as the base
      };

      var trace2 = {
        x: dateDiffs,
        y: linesOfCodeAdded,
        type: 'bar',
        name: 'Date Difference from Start',
        base: startDates,
        orientation: 'h',
        width: maxVal * 0.075,
        offset: maxVal * 0.01,
        marker: {
          mode: 'markers',
          color: barColors
        },
        hoverinfo: '%{hovertemplate}',
        hovertemplate: filteredMerges.map(name => `Merge Request: ${name}`),
        showlegend: false
      };

      data = [trace1, trace2];


      // Create the plot
      Plotly.newPlot(plotDiv, data, layout);

      console.log(this.getBarColors(4))
    });
  }

  getBarColors(numberOfBars: number): string[] {
    const colors: string[] = [];
    const saturation: number = 0.8; // You can adjust the saturation and value as needed
    const value: number = 0.8;

    let currentHue: number = 0;
    let rgb: number[];

    for (let i = 0; i < numberOfBars; i++) {
      currentHue = (360 / numberOfBars) * i;
      rgb = this.hsvToRgb(currentHue / 360, saturation, value);
      colors.push(`rgb(${rgb[0]}, ${rgb[1]}, ${rgb[2]})`);
    }
    return colors;
  }

  hsvToRgb(h : number, s : number, v : number) {
    var r : number, g : number, b : number;
    var i = Math.floor(h * 6);
    var f = h * 6 - i;
    var p = v * (1 - s);
    var q = v * (1 - f * s);
    var t = v * (1 - (1 - f) * s);

    switch (i % 6) {
      case 0: r = v, g = t, b = p; break;
      case 1: r = q, g = v, b = p; break;
      case 2: r = p, g = v, b = t; break;
      case 3: r = p, g = q, b = v; break;
      case 4: r = t, g = p, b = v; break;
      case 5: r = v, g = p, b = q; break;
      default: r = 0, g = 0, b = 0;
    }

    return [Math.round(r * 255), Math.round(g * 255), Math.round(b * 255)];
  }
}
