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
    let url = `${environment.apiUrl}api/vacancies/`;
    return this.http.get<Vacancy[]>(url);
  }
  getMoreData(offset: number) {
    let url = `${environment.apiUrl}api/vacancies/?offset=${offset}`;
    return this.http.get<Vacancy[]>(url);
  }
  getDataForPieChart() {
    let url = `${environment.apiUrl}api/charts/skills_demand/`;
    return this.http.get(url);
  }
  getDataForBarChart() {
    let url = `${environment.apiUrl}api/charts/skills_salary/`;
    return this.http.get(url);
  }
  getDataForLineChart() {
    let url = `${environment.apiUrl}api/charts/experience_salary`;
    return this.http.get(url);
  }
  getDataForPreviewInfo() {
    let url = `${environment.apiUrl}api/charts/preview_info`;
    return this.http.get<PrewInfo>(url);
  }
}
