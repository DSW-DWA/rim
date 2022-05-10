import { Component, OnInit } from '@angular/core';
import { ConService } from '../con.service';
// import data
import { Vacancy } from '../interfaces';

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.scss']
})
export class ReviewComponent implements OnInit {

  vacancies!: Vacancy[];
  choseItem: number = 0;
  bgColor: string = "#5E5E5E";
  uploadCondit: boolean = true;
  shadow: string = "drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))";

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
  //return Vacancy and index
  RetItem(item: Vacancy, i: number){
    this.showItem = item;
    this.choseItem = i;
  }
  //inicelization chooding element
  check(i: number){
    return this.choseItem == i;
  }
  // upload data from server
  ngOnInit() {
    this.con.getData().subscribe(data =>{
      this.vacancies = data;
      this.showItem = this.vacancies[0];
    })
    // time for animation 
    setTimeout(()=>{
      this.condit = false;
    },2000);
  }
  // upload data if you pres the btn
  adData(){
    this.uploadCondit = false;
    this.con.getData().subscribe(data =>{
      this.vacancies= [...this.vacancies, ...Object.values(data)];
      this.uploadCondit = true;
    })
  }
}
