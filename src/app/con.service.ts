import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Vacancy } from './interfaces';
import { PrewInfo } from './interfaces';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ConService {
  constructor(private http: HttpClient) {}
  getData() {
    return this.http.get<Vacancy[]>(`${environment.apiUrl}api/vacancies`);
  }
  getMoreData(offset: number) {
    return this.http.get<Vacancy[]>(
      `${environment.apiUrl}api/vacancies?offset=${offset}`
    );
  }
  getDataForPieChart() {
    return this.http.get(`${environment.apiUrl}api/charts/skills_demand`);
  }
  getDataForBarChart() {
    return this.http.get(`${environment.apiUrl}api/charts/skills_salary`);
  }
  getDataForLineChart() {
    return this.http.get(`${environment.apiUrl}api/charts/experience_salary`);
  }
  getDataForPreviewInfo() {
    return this.http.get<PrewInfo>(
      `${environment.apiUrl}api/charts/preview_info`
    );
  }
}
