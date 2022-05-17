import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { EChartsOption } from 'echarts';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-chart-map',
  templateUrl: './chart-map.component.html',
  styleUrls: ['./chart-map.component.scss']
})
export class ChartMapComponent implements OnInit {
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }

}
