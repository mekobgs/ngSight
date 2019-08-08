import { Component, OnInit } from '@angular/core';
import { LINE_CHART_COLORS } from 'src/app/Shared/chart.colors';

const LINE_CHART_SAMPLE_DATA : any[] = [
  {    data: [32,14,46,23,38,56], label: 'Sentiment Analysis'  },
  {    data: [54,54,56,89,54,84], label: 'Image Recognition'  },
  {    data: [85,65,88,25,63,21], label: 'Forecasting'  }
];

const LINE_CHART_LABELS: string[] = ['Jan','Feb','Mar','Apr','May','Jun',]


@Component({
  selector: 'app-line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.css']
})
export class LineChartComponent implements OnInit {

  constructor() { }

  lineChartData = LINE_CHART_SAMPLE_DATA;
  lineChartLabels = LINE_CHART_LABELS;
  lineChartOptions: any = {
    responsive: true
  };
  lineChartLegend: true;
  lineChartType = 'line';
  lineChartColors = LINE_CHART_COLORS;
  ngOnInit() {
  }

}
