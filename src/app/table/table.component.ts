import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { ConService } from '../con.service';
import { Vacancy } from '../interfaces';
import { environment } from 'src/environments/environment.prod';
@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
})
export class TableComponent implements OnInit {
  ELEMENT_DATA!: {
    id?: number;
    name: string;
    area: string;
    salary: number;
    experience: string;
    description?: string;
    key_skills: string[];
    alternate_url?: string;
  }[];
  displayedColumns!: string[];
  dataSource!: any;

  constructor(private con: ConService) {}

  apiUrl: string = environment.apiUrl +"api/files/download_data";

  condition: boolean = true;
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  ngOnInit(): void {
    this.con.getData().subscribe((data) => {
      this.ELEMENT_DATA = data;
      this.ELEMENT_DATA.forEach((el) => {
        delete this.ELEMENT_DATA[this.ELEMENT_DATA.indexOf(el)].description;
        delete this.ELEMENT_DATA[this.ELEMENT_DATA.indexOf(el)].id;
        delete this.ELEMENT_DATA[this.ELEMENT_DATA.indexOf(el)].alternate_url;
        this.condition = false
      });
      this.displayedColumns = [
        'name',
        'area',
        'salary',
        'experience',
        'key_skills',
      ];
      this.dataSource = new MatTableDataSource(this.ELEMENT_DATA);
    });
  }
  addData(){
    this.condition = true;
    this.con.getMoreData(this.ELEMENT_DATA.length).subscribe((data) => {
      this.ELEMENT_DATA = [...this.ELEMENT_DATA, ...Object.values(data)];
      this.ELEMENT_DATA.forEach((el) => {
        delete this.ELEMENT_DATA[this.ELEMENT_DATA.indexOf(el)].description;
        delete this.ELEMENT_DATA[this.ELEMENT_DATA.indexOf(el)].id;
        delete this.ELEMENT_DATA[this.ELEMENT_DATA.indexOf(el)].alternate_url;
      });
      this.dataSource = new MatTableDataSource(this.ELEMENT_DATA);
      this.condition = false;
    });
  }

}
