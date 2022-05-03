import { Component, OnInit } from '@angular/core';
import { EChartsOption } from 'echarts';

@Component({
  selector: 'app-chart-bar-first',
  templateUrl: './chart-bar-first.component.html',
  styleUrls: ['./chart-bar-first.component.scss']
})
export class ChartBarFirstComponent implements OnInit {
  chartOption: EChartsOption = {
    xAxis: {
      type: 'category',
      data: ['nodejs', 'Python', 'PHP', 'C#', 'SQL', 'JS', 'GIT']
    },
    yAxis: {
      type: 'value'
    },
    series: [
      {
        data: [120, 200, 150, 80, 70, 110, 130],
        type: 'bar'
      }
    ],
    color:[
      "#474747",
    ],
  };
  constructor() { }

  ngOnInit(): void {
  }

}
