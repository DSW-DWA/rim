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
  condit:boolean = true;
  //return Vacancy
  RetItem(item: Vacancy){
    this.showItem = item;
  }
  // upload data from server
  ngOnInit() {
    this.con.getData().subscribe(data =>{
      this.vacancies = data;
      this.showItem = this.vacancies[0];
    })
    setTimeout(()=>{
      this.condit = false;
    },2000);
  }
  // upload data if you pres the btn
  adData(){
    this.con.getData().subscribe(data =>{
      this.vacancies= [...this.vacancies, ...Object.values(data)];
    })
  }
}
