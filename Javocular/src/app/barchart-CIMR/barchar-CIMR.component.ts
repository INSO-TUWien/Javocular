import {Component, OnInit} from '@angular/core';
import { PlotlyService } from '../plotly.service';

@Component({
  selector: 'app-plotly-component',
  templateUrl: './barchar-CIMR.component.html',
  styleUrls: ['./barchar-CIMR.component.css']
})
export class BarcharCIMRComponent implements OnInit{
  constructor(private plot:PlotlyService) { }
  public authors!: string[];
  public checkedAuthors: boolean[] = [];
  searchText: string = '';
  ngOnInit(): void {
    // let x:number[][] = [[43, 64, 32], [10, 15, 14], [5, 8, 10]];
    // let authors:string[] = ["Author 1", "Author 2", "Author 3"];
    this.authors = this.getAuthorNames();

    // Initialize checkedAuthors array with all checkboxes initially checked
    this.checkedAuthors = new Array(this.authors.length).fill(true);

    this.selectAll();
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

    let commits = <HTMLInputElement> document.getElementById("checkboxCommits");
    let issues = <HTMLInputElement> document.getElementById("checkboxIssues");
    let mergeRequests = <HTMLInputElement> document.getElementById("checkboxMergeRequests");
    commits.checked = true;
    issues.checked = true;
    mergeRequests.checked = true;
  }

  unselectAll() {
    this.checkedAuthors = new Array(this.authors.length).fill(false);

    let commits = <HTMLInputElement> document.getElementById("checkboxCommits");
    let issues = <HTMLInputElement> document.getElementById("checkboxIssues");
    let mergeRequests = <HTMLInputElement> document.getElementById("checkboxMergeRequests");
    commits.checked = false;
    issues.checked = false;
    mergeRequests.checked = false;
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

  getCheckedTables() {
    let commits = <HTMLInputElement> document.getElementById("checkboxCommits");
    let issues = <HTMLInputElement> document.getElementById("checkboxIssues");
    let mergeRequests = <HTMLInputElement> document.getElementById("checkboxMergeRequests");
    let tables: string[] = [];
    if (commits.checked) {
      tables.push("commits");
    }
    if (issues.checked) {
      tables.push("issues");
    }
    if (mergeRequests.checked) {
      tables.push("mergeRequests");
    }

    return tables;
  }

  plotCIMRJson(tables: string[], excAuthors: string[]) {
    // remove text and border that is displayed when a diagram is not generated yet
    document.getElementById("noDiagGen")!.style.display = "none";
    document.getElementById("plot")!.style.borderStyle = "none";

    this.plot.plotCIMRJson("CIMR - Diagram","plot", tables, excAuthors);
  }
}
