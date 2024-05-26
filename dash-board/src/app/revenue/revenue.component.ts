import { Component } from '@angular/core';
import * as Highcharts from 'highcharts';
@Component({
  selector: 'app-revenue',
  templateUrl: './revenue.component.html',
  styleUrls: ['./revenue.component.css']
})
export class RevenueComponent {
 
  Highcharts=Highcharts
  chartOptions={}
  constructor(){

    this.chartOptions=

    {
      chart: {
          type: 'line'
      },
      title: {
          text: 'Monthly Average revenue'
      },
      // subtitle: {
      //     text: 'Source: ' +
      //         '<a href="https://en.wikipedia.org/wiki/List_of_cities_by_average_temperature" ' +
      //         'target="_blank">Wikipedia.com</a>'
      // },
      xAxis: {
          categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
      },
      yAxis: {
          title: {
              // text: 'Temperature (°C)'
          }
      },
      plotOptions: {
          line: {
              dataLabels: {
                  enabled: true
              },
              enableMouseTracking: false
          }
      },
      series: [{
          name: 'revenue',
          data: [16.0, 18.2, 23.1, 27.9, 32.2, 36.4, 39.8, 38.4, 35.5, 29.2,
              22.0, 30.8]
      }]
    }

  }
}



