import {Component, OnInit} from '@angular/core';
import { PlotlyService } from '../plotly.service';

@Component({
  selector: 'app-plotly-component',
  templateUrl: './barchar-CIMR.component.html',
  styleUrls: ['./barchar-CIMR.component.css']
})
export class BarcharCIMRComponent implements OnInit{
  constructor(private plot:PlotlyService) { }
  public authors: string[] = [];
  public checkedAuthors: boolean[] = [];
  searchText: string = '';
  ngOnInit(): void {
    this.getAuthorNames().subscribe(data => {

      console.log('Authors data:', data);

      // Assuming data is an object with properties corresponding to authors
      for (let author in data) {
        if (data.hasOwnProperty(author)) {
          this.authors.push(author);
        }
      }
      this.selectAll();
    });
  }

  toggleCheckbox(index: number) {
    this.checkedAuthors[index] = !this.checkedAuthors[index];
  }

  get filteredAuthors(): string[] {
    // Filter authors based on the search text
    return this.authors.filter(author => author.toLowerCase().includes(this.searchText.toLowerCase()));
  }

  getUncheckedAuthors() {
    const uncheckedAuthors = this.authors.filter((author, index) => !this.checkedAuthors[index]);
    console.log("Unchecked Authors:", uncheckedAuthors);
    return uncheckedAuthors;
  }

  selectAll() {
    this.checkedAuthors = new Array(this.authors.length).fill(true);
  }

  unselectAll() {
    this.checkedAuthors = new Array(this.authors.length).fill(false);
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
    return this.plot.getAuthorNamesAPI();
  }

  plotCIMRJson(excAuthors: string[]) {
    // remove text and border that is displayed when a diagram is not generated yet
    document.getElementById("noDiagGen")!.style.display = "none";
    document.getElementById("plot")!.style.borderStyle = "none";
    let radioNone = <HTMLInputElement> document.getElementById("btnradioNone")!;
    radioNone.checked = true;

    this.plot.plotCIMRJsonAPI("CIMR - Diagram","plot", excAuthors);
  }

  groupCIMR(table: string) {
    let title = "CIMR - " + table + " Grouping";
    this.plot.groupCIMR(title, table, "plot");
  }
}
