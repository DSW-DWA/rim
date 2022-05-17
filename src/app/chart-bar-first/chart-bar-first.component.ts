import { Component, OnInit } from '@angular/core';
import { EChartsOption } from 'echarts';
import { ConService } from '../con.service';

@Component({
  selector: 'app-chart-bar-first',
  templateUrl: './chart-bar-first.component.html',
  styleUrls: ['./chart-bar-first.component.scss']
})
export class ChartBarFirstComponent implements OnInit {
  chartOption: EChartsOption = {};
  constructor(private con: ConService) { }

  ngOnInit(): void {
    this.con.getDataForBarChart().subscribe(data => {
      this.chartOption = {
        xAxis: {
          type: 'category',
          data: data.len_skills
        },
        yAxis: {
          type: 'value'
        },
        series: [
          {
            data: data.salary,
            type: 'bar'
          }
        ],
        color:[
          "#474747",
        ],
      }
    });
  }

}
