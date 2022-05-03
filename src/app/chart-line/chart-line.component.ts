import { Component, OnInit } from '@angular/core';
import { EChartsOption } from 'echarts';
@Component({
  selector: 'app-chart-line',
  templateUrl: './chart-line.component.html',
  styleUrls: ['./chart-line.component.scss']
})
export class ChartLineComponent implements OnInit {

  chartOption: EChartsOption = {
    xAxis: {
      type: 'category',
      data: ['1', '6', '8', '10', '15', '18', '23'],
    },
    yAxis: {
      type: 'value',
    },
    series: [
      {
        data: [820, 932, 901, 934, 1290, 1330, 1320],
        type: 'line',
      },
    ],
    color: [
      "#1c1c1c",
    ]
  };
  constructor() { }

  ngOnInit(): void {
  }

}
