import { Component, OnInit, Input } from '@angular/core';
import { Vacancy } from '../interfaces';

@Component({
  selector: 'app-vacancy-info',
  templateUrl: './vacancy-info.component.html',
  styleUrls: ['./vacancy-info.component.scss']
})
export class VacancyInfoComponent implements OnInit {
  @Input() showItem!: Vacancy;
  salar(item: Vacancy){
    if (item.salary == null) return "Не указана";
    else return item.salary;
  }
  check(item: Vacancy){
    let tmp: number = item.key_skills.length; 
    return tmp != 0;
  }
  constructor() {
  }
  ngOnInit(): void {
  }
  
}
