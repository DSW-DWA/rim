import { HtmlParser, isNgTemplate } from '@angular/compiler';
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import {TooltipPosition} from '@angular/material/tooltip';
import { ConService } from '../con.service';
import { Area } from '../interfaces';

@Component({
  selector: 'app-chart-map',
  templateUrl: './chart-map.component.html',
  styleUrls: ['./chart-map.component.scss'],
})
export class ChartMapComponent implements OnInit {
  Data!: Area[];
  constructor(private con: ConService){

  }
  ngOnInit(): void {
    this.con.getDataForArea().subscribe(data =>{
      this.Data = data;
    })
  }
  info(id: number){
    let reg: string ="";
    this.Data.forEach(element => {
      if ( Number(element.city.code) == id){
        reg = reg+element.city.region +", Колл-во вакансий: "+String(element.cnt) ;
      }
    });
    if (reg != "") return reg 
      else return "неизвестно"
  }
  clr(id: number){
    let clr: string ="";
    this.Data.forEach(element =>{
      if (Number(element.city.code) == id) clr = clr + element.color;
    });
    return clr;
  }
}
