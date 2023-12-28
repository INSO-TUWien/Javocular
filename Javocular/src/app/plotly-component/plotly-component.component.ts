import {Component, OnInit} from '@angular/core';
import { PlotlyService } from '../plotly.service';

@Component({
  selector: 'app-plotly-component',
  templateUrl: './plotly-component.component.html',
  styleUrls: ['./plotly-component.component.css']
})
export class PlotlyComponentComponent implements OnInit{
  constructor(private plot:PlotlyService) { }
  public authors!: string[];
  public checkedAuthors: boolean[] = [];
  ngOnInit(): void {
    // let x:number[][] = [[43, 64, 32], [10, 15, 14], [5, 8, 10]];
    // let authors:string[] = ["Author 1", "Author 2", "Author 3"];
    this.plotCIMRJson([], []);
    this.authors = this.getAuthorNames();

    // Initialize checkedAuthors array with all checkboxes initially checked
    this.checkedAuthors = new Array(this.authors.length).fill(true);
  }

  toggleCheckbox(index: number) {
    this.checkedAuthors[index] = !this.checkedAuthors[index];
  }

  getUncheckedAuthors() {
    const uncheckedAuthors = this.authors.filter((author, index) => !this.checkedAuthors[index]);
    console.log("Unchecked Authors:", uncheckedAuthors);
    return uncheckedAuthors;
  }

  changeDisplayFilter(id: string) {
    if (document.getElementById(id)!.style.display === "none") {
      document.getElementById(id)!.style.display = "block"
    }
    else {
      document.getElementById(id)!.style.display = "none"
    }
  }

  getAuthorNames() {
    return this.plot.getAuthorNames();
  }

  plotCIMRJson(tables: string[], excAuthors: string[]) {
    this.plot.plotCIMRJson("CIMR - Diagram","plot", tables, excAuthors);
  }
}
