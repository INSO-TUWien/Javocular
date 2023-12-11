import {Component, OnInit} from '@angular/core';
import { PlotlyService } from '../plotly.service';

@Component({
  selector: 'app-plotly-component',
  templateUrl: './plotly-component.component.html',
  styleUrls: ['./plotly-component.component.css']
})
export class PlotlyComponentComponent implements OnInit{
  constructor(private plot:PlotlyService) { }
  ngOnInit(): void {
    let x:number[][] = [[43, 64, 32], [10, 15, 14], [5, 8, 10]];
    let authors:string[] = ["Author 1", "Author 2", "Author 3"];
    this.plot.plotCIMR("CIMR - Diagram","plot", x, authors);
  }
}
