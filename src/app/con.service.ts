import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { BarChart, LineChart, PieChart, Vacancy } from './interfaces';
import { PreviewInfo } from './interfaces';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ConService {
  constructor(private http: HttpClient) {}
  getData() {
    return this.http.get<Vacancy[]>(`${environment.apiUrl}api/vacancies`);
  }
  getMoreData(value: number) {
    return this.http.get<Vacancy[]>(
      `${environment.apiUrl}api/vacancies?offset=${value}`
    );
  }
  getDataForPieChart() {
    return this.http.get<PieChart[]>(
      `${environment.apiUrl}api/charts/skills_demand?limit=9`
    );
  }
  getDataForBarChart() {
    return this.http.get<BarChart>(
      `${environment.apiUrl}api/charts/skills_salary`
    );
  }
  getDataForLineChart() {
    return this.http.get<LineChart>(
      `${environment.apiUrl}api/charts/experience_salary`
    );
  }
  getDataForPreviewInfo() {
    return this.http.get<PreviewInfo>(
      `${environment.apiUrl}api/charts/preview_info`
    );
  }
}
