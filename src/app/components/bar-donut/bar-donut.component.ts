import { Component, OnInit } from '@angular/core';
import { ChartType } from 'chart.js';
import { MultiDataSet, Label } from 'ng2-charts';
import {BarDonutService} from './bar-donut.service';

@Component({
  selector: 'app-bar-donut',
  templateUrl: './bar-donut.component.html',
  styleUrls: ['./bar-donut.component.scss']
})
export class BarDonutComponent implements OnInit {

  // Doughnut
  public doughnutChartLabels: Label[] = [];
  public doughnutChartData: MultiDataSet = [];
  public doughnutChartType: ChartType = 'doughnut';

  constructor(
    private _service: BarDonutService
  ) { }

  ngOnInit() {
    this._service.getDonutData().subscribe(
      res => {
        this.doughnutChartLabels = res.labels;
        this.doughnutChartData = res.data;
      }
    );
  }

  // events
  public chartClicked({ event, active }: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }

  public chartHovered({ event, active }: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }

}
