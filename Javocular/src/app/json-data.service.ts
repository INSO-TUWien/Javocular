import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class JsonDataService {
  private jsonUrlCIMR = 'assets/BarChartTestData.json'; // adjust the path based on your project structure
  private histogramJsonUrl = 'assets/HistogramTestData.json'; // adjust the path based on your project structure
  constructor(private http: HttpClient) {}

  getAuthorsCIMR(): Observable<any> {
    return this.http.get<any>(this.jsonUrlCIMR);
  }
  getHistogramData(): Observable<any> {
    return this.http.get<any>(this.histogramJsonUrl);
  }
}
