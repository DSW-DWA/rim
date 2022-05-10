import { Component, OnInit } from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import { ConService } from '../con.service';
import { Vacancy } from '../interfaces';



@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {

  ELEMENT_DATA!: {
    "id"?: number,
    "name": string,
    "area": string,
    "salary": number,
    "experience": string,
    "description"?: string,
    "key_skills": [
    string
    ],
    "alternate_url"?: string
}[];
  displayedColumns!: string[];
  dataSource!: any;

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  constructor(private con:ConService) { }

  ngOnInit(): void {
    this.con.getData().subscribe( data =>{
      this.ELEMENT_DATA = data;
      this.ELEMENT_DATA.forEach( el =>{
        delete this.ELEMENT_DATA[this.ELEMENT_DATA.indexOf(el)].description;
        delete this.ELEMENT_DATA[this.ELEMENT_DATA.indexOf(el)].id;
        delete this.ELEMENT_DATA[this.ELEMENT_DATA.indexOf(el)].alternate_url;
      })
      this.displayedColumns = ['name','area','salary','experience','key_skills'];
      this.dataSource = new MatTableDataSource(this.ELEMENT_DATA);
      console.log(this.ELEMENT_DATA);
    })
  }

}
