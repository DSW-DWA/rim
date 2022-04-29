import { Component, OnInit } from '@angular/core';
import { ConService } from '../con.service';
// import data
import { Vacancy } from '../vacancy';

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.scss']
})
export class ReviewComponent implements OnInit {

  vacancies!: any;

  constructor(private con:ConService) { 
  }

  showItem: Vacancy= {
    id: -1,
    name: "string",
    area: "string",
    salary: 3242,
    experience: "string",
    description: "string",
    key_skills: [
    "string"
    ],
    alternate_url: "string"
  };
  RetItem(item: Vacancy){
    this.showItem = item;
  }
  ngOnInit() {
    this.con.getData().subscribe(data =>{
      this.vacancies = data;
      //console.log(this.vacancies);
    })
  }
  adData(){
    this.con.getData().subscribe(data =>{
      this.vacancies= [...this.vacancies, ...Object.values(data)];
      //console.log();
    })
  }
}
