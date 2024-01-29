import {Component, OnInit} from '@angular/core';
import {PlotlyService} from "../plotly.service";
import {JsonDataService} from "../json-data.service";

@Component({
  selector: 'app-histogram-mr',
  templateUrl: './histogram-mr.component.html',
  styleUrls: ['./histogram-mr.component.css']
})
export class HistogramMrComponent implements OnInit{
  mergeRequestNames: string[] = [];
  searchText: string = '';
  public checkedMerges: boolean[] = [];
  startDate: string = '';
  endDate: string = '';
  constructor(private plot:PlotlyService) {  }

  ngOnInit() {
    this.mergeRequestNames = this.getMergeRequestNames();
    this.selectAll();
  }

  plotHistogramCMIRJson(execMerges: string[]) {
    // remove text and border that is displayed when a diagram is not generated yet
    document.getElementById("noDiagGen")!.style.display = "none";
    document.getElementById("plot")!.style.borderStyle = "none";

    this.plot.plotHistMR("lol", "plot", execMerges, this.startDate, this.endDate);
  }

  toggleCheckbox(index: number) {
    this.checkedMerges[index] = !this.checkedMerges[index];
  }

  selectAll() {
    this.checkedMerges = new Array(this.mergeRequestNames.length).fill(true);
  }

  unselectAll() {
    this.checkedMerges = new Array(this.mergeRequestNames.length).fill(false);
  }

  get filteredMerges(): string[] {
    return this.mergeRequestNames.filter(mr => mr.toLowerCase().includes(this.searchText.toLowerCase()));
  }

  getUncheckedMerges() {
    const uncheckedMerges = this.mergeRequestNames.filter((mr, index) => !this.checkedMerges[index]);
    return uncheckedMerges;
  }

  changeDisplayFilter(id: string) {
    if (document.getElementById(id)!.style.display === "none") {
      document.getElementById(id)!.style.display = "block"
    }
    else {
      document.getElementById(id)!.style.display = "none"
    }
  }

  getMergeRequestNames() {
    return this.plot.getMergeRequestNames();
  }
}
