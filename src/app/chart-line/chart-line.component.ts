import { Component, OnInit } from '@angular/core';
import { EChartsOption } from 'echarts';
import { ConService } from '../con.service';
@Component({
  selector: 'app-chart-line',
  templateUrl: './chart-line.component.html',
  styleUrls: ['./chart-line.component.scss'],
})
export class ChartLineComponent implements OnInit {
  chartOption: EChartsOption = {};
  constructor(private con: ConService) {}

  ngOnInit(): void {
    this.con.getDataForLineChart().subscribe((data) => {
      this.chartOption = {
        xAxis: {
          type: 'category',
          data: ['менее 1', 'от 1 до 3', 'от 3 до 6', 'более 6'],
        },
        yAxis: {
          type: 'value',
        },
        grid: {
          left: '3%',
          right: '4%',
          bottom: '3%',
          containLabel: true,
        },
        series: [
          {
            data: data.avr_salary,
            type: 'line',
          },
        ],
        color: ['#1c1c1c'],
      };
    });
  }
}
