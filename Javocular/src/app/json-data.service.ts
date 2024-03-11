import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class JsonDataService {
  private jsonUrlCIMR = 'assets/BarChartTestData.json';
  private jsonUrlCIMRAPI = 'http://localhost:8080/api/database/cimr';
  private histogramJsonUrl = 'assets/HistogramTestData.json';
  constructor(private http: HttpClient) {}

  getAuthorsCIMR(): Observable<any> {
    return this.http.get<any>(this.jsonUrlCIMR);
  }
  getAuthorsCIMRAPI(): Observable<any> {
    return this.http.get<any>(this.jsonUrlCIMRAPI);
  }
  getHistogramData(): Observable<any> {
    return this.http.get<any>(this.histogramJsonUrl);
  }
}
