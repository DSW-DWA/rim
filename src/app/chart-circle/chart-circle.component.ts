import { Component, OnInit } from '@angular/core';
import { EChartsOption } from 'echarts';
import { ConService } from '../con.service';

@Component({
  selector: 'app-chart-circle',
  templateUrl: './chart-circle.component.html',
  styleUrls: ['./chart-circle.component.scss'],
})
export class ChartCircleComponent implements OnInit {
  chartOption: EChartsOption = {};
  constructor(private con: ConService) {}

  ngOnInit(): void {
    this.con.getDataForPieChart().subscribe((data) => {
      this.chartOption = {
        tooltip: {
          trigger: 'item',
        },
        grid: {
          left: '3%',
          right: '4%',
          bottom: '3%',
          containLabel: true,
        },
        color: ['#adadad', '#878787', '#1c1c1c', '#474747', '#333333'],
        series: [
          {
            name: 'Данные',
            type: 'pie',
            radius: ['50%', '70%'],
            avoidLabelOverlap: false,
            emphasis: {
              label: {
                show: true,
                fontSize: '22',
                fontWeight: 'bold',
              },
            },
            labelLine: {
              show: false,
            },
            data,
          },
        ],
      };
    });
  }
}
