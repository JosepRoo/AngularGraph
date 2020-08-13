import { Component, OnInit } from '@angular/core';
import { ChartType, ChartOptions } from 'chart.js';
import { Label } from 'ng2-charts';
import {BarPieService} from './bar-pie.service';

@Component({
  selector: 'app-bar-pie',
  templateUrl: './bar-pie.component.html',
  styleUrls: ['./bar-pie.component.scss']
})
export class BarPieComponent implements OnInit {
  // Pie
  public pieChartOptions: ChartOptions = {
    responsive: true,
    legend: {
      position: 'top',
    },
    plugins: {
      datalabels: {
        formatter: (value, ctx) => {
          const label = ctx.chart.data.labels[ctx.dataIndex];
          return label;
        },
      },
    }
  };
  public pieChartLabels: Label[] = [];
  public pieChartData: number[] = [];
  public pieChartType: ChartType = 'pie';
  public pieChartLegend = true;
  public pieChartColors = [
    {
      backgroundColor: [],
    },
  ];

  constructor(
    private _service: BarPieService
  ) { }

  ngOnInit() {
    this._service.getPieData().subscribe(
      res => {
        this.pieChartLabels = res.labels;
        this.pieChartColors = [{backgroundColor: res.colors}];
        this.pieChartData = res.data;
      }
    )
  }
}
