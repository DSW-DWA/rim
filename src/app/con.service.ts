import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { BarChart, LineChart, PieChart, Vacancy } from './interfaces';
import { PrewInfo } from './interfaces';

@Injectable({
  providedIn: 'root'
})
export class ConService {

  constructor(private http: HttpClient) { }
  getData(){
    let url = 'http://api.utmn.su/api/vacancies';
    return this.http.get<Vacancy[]>(url);
  }
  getMoreData(value: number) {
    let url = 'https://api.utmn.su/api/vacancies/?offset=' + value;
    return this.http.get<Vacancy[]>(url);
  }
  getDataForPieChart(){
    let url = "http://api.utmn.su/api/charts/skills_demand";
    return this.http.get<PieChart[]>(url);
  }
  getDataForBarChart(){
    let url = "http://api.utmn.su/api/charts/skills_salary";
    return this.http.get<BarChart>(url);
  }
  getDataForLineChart(){
    let url = "http://api.utmn.su/api/charts/experience_salary";
    return this.http.get<LineChart>(url);
  }
  getDataForPreviewInfo(){
    let url = "http://api.utmn.su/api/charts/preview_info";
    return this.http.get<PrewInfo>(url);
  }
}
