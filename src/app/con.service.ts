import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ConService {

  constructor(private http: HttpClient) { }
  getData(){
    let url = 'http://api.utmn.su/api/vacancies/';
    return this.http.get(url);
  }
}
