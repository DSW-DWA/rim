import { Component, OnInit, Input } from '@angular/core';
import { Vacancy } from '../vacancy';

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
  check(){
  }
  constructor() {
  }
  ngOnInit(): void {
  }
  
}
