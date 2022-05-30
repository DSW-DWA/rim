import { Component, OnInit } from '@angular/core';
import { ConService } from '../con.service';
// import data
import { Vacancy } from '../interfaces';

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.scss'],
})
export class ReviewComponent implements OnInit {
  vacancies!: Vacancy[];
  choseItem: number = 0;
  bgColor: string = '#5967E8';
  uploadCondition: boolean = true;
  shadow: string = 'drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))';

  constructor(private con: ConService) {}

  showItem!: Vacancy;
  condition: boolean = true;
  
  //return Vacancy and index
  RetItem(item: Vacancy, i: number) {
    this.showItem = item;
    this.choseItem = i;
  }
  //initialize choosing element
  check(num: number) {
    return this.choseItem === num;
  }
  // upload data from server
  ngOnInit() {
    this.con.getData().subscribe((data) => {
      this.vacancies = data;
      this.showItem = this.vacancies[0];
      this.condition = false;
    });
  }
  // upload data if you pres the btn
  addData() {
    this.uploadCondition = false;
    this.con.getMoreData(this.vacancies.length).subscribe((data) => {
      this.vacancies = [...this.vacancies, ...Object.values(data)];
      this.uploadCondition = true;
    });
  }
}
