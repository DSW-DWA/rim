import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Vacancy } from './interfaces'
@Injectable({
  providedIn: 'root'
})
export class ConService {

  constructor(private http: HttpClient) { }
  getData(){
    let url = 'http://api.utmn.su/api/vacancies/';
    return this.http.get<Vacancy[]>(url);
  }
  getDataForPieChart(){
    let url = "http://api.utmn.su/api/charts/skills_demand/";
    return this.http.get(url);
  }
  getDataForBarChart(){
    let url = "http://api.utmn.su/api/charts/skills_salary/";
    return this.http.get(url);
  }
  getDataForLineChart(){
    let url = "http://api.utmn.su/api/charts/experience_salary";
    return this.http.get(url);
  }
  getDataForPreviewInfo(){
    let url = "http://api.utmn.su/api/charts/preview_info";
    return this.http.get(url);
  }
}
