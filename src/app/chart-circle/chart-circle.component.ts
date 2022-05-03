import { Component, OnInit } from '@angular/core';
import { EChartsOption } from 'echarts';

@Component({
  selector: 'app-chart-circle',
  templateUrl: './chart-circle.component.html',
  styleUrls: ['./chart-circle.component.scss']
})
export class ChartCircleComponent implements OnInit {
  chartOption: EChartsOption =  {
    tooltip: {
      trigger: 'item'
    },
    legend: {
      orient: 'vertical',
      right: 10,
      top: 'center'
    },
    color:[
      "#adadad",
      "#878787",
      "#1c1c1c",
      "#474747",
      "#333333",
    ],
    series: [
      {
        name: 'Access From',
        type: 'pie',
        radius: ['40%', '70%'],
        avoidLabelOverlap: false,
        label: {
          show: false,
          position: 'center'
        },
        emphasis: {
          label: {
            show: true,
            fontSize: '40',
            fontWeight: 'bold'
          }
        },
        labelLine: {
          show: false
        },
        data: [
          { value: 1048, name: 'Nodejs' },
          { value: 735, name: 'Python' },
          { value: 580, name: 'C#' },
          { value: 484, name: 'Java' },
          { value: 300, name: 'PHP' }
        ]
      }
    ]
  };
  constructor() { }

  ngOnInit(): void {
  }

}
