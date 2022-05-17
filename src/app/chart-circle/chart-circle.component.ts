import { Component, OnInit } from '@angular/core';
import { EChartsOption } from 'echarts';
import { ConService } from '../con.service';

@Component({
  selector: 'app-chart-circle',
  templateUrl: './chart-circle.component.html',
  styleUrls: ['./chart-circle.component.scss']
})
export class ChartCircleComponent implements OnInit {
  chartOption: EChartsOption =  {};
  constructor(private con:ConService) { }

  ngOnInit(): void {
    this.con.getDataForPieChart().subscribe(data =>{
      this.chartOption = {
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
            name: 'Данные',
            type: 'pie',
            radius: ['50%', '70%'],
            avoidLabelOverlap: false,
            label: {
              show: false,
              position: 'center'
            },
            emphasis: {
              label: {
                show: true,
                fontSize: '25',
                fontWeight: 'bold'
              }
            },
            labelLine: {
              show: false
            },
            data: data
          }
        ]
      }
    })
  }

}
