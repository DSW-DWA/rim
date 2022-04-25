import { Component, OnInit } from '@angular/core';

// import data
import { Vacancy } from '../vacancy';
import { VACANCIES } from '../generated';

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.scss']
})
export class ReviewComponent implements OnInit {

  vacancies: Vacancy[] = VACANCIES;

  showItem: Vacancy = this.vacancies[0];
  RetItem(item: Vacancy){
    this.showItem = item;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
