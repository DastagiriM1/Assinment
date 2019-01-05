import { Component, ElementRef,
  AfterViewInit,
  OnDestroy,
  ViewChild } from '@angular/core';
//import { chart } from 'highcharts';
//import * as Highcharts from 'highcharts';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnDestroy, AfterViewInit {

  @ViewChild('chart') public chartEl: ElementRef;

  private _chart: any;
  dataenable : boolean;
  title = 'angularchartsdemo';
  public graphenable(){
    this.dataenable = true;
  }
  public ngAfterViewInit() {
    let opts: any = {
    
        title: {
            text: 'Stock Generate',
            x: -20 //center
        },
        xAxis: {
          type: 'datetime',
          labels: {
              overflow: 'justify'
          }
      },
      plotOptions: {
        spline: {
            lineWidth: 4,
            states: {
                hover: {
                    lineWidth: 5
                }
            },
            marker: {
                enabled: false
            },
            pointInterval: 3600000, // one hour
            pointStart: Date.UTC(2018, 0, 1, 0, 0, 0)
        }
    },
        series: [{
            name: 'purchase',
            color: '#FF0000',
            data: [
              3.7, 3.3, 3.9, 5.1, 3.5, 3.8, 4.0, 5.0, 6.1, 3.7, 3.3, 6.4,
              6.9, 6.0, 6.8, 4.4, 4.0, 3.8, 5.0, 4.9, 9.2, 9.6, 9.5, 6.3,
              9.5, 10.8, 14.0, 11.5, 10.0, 10.2, 10.3, 9.4, 8.9, 10.6, 10.5, 11.1,
              10.4, 10.7, 11.3, 10.2, 9.6, 10.2, 11.1, 10.8, 13.0, 12.5, 12.5, 11.3,
              10.1
          ]
        },
        {
          name: 'selling',
          color: '#00FF00',
          data: [
            2.7, 4.3, 1.9, 1.1, 1.5, 2.8, 3.0, 4.0, 4.1, 1.7, 1.3, 4.4,
            5.9, 5.0, 4.8, 3.4, 2.0, 2.8, 2.0, 1.9, 6.2, 5.6, 4.5, 2.3,
            7.5, 8.8, 4.0, 1.5, 0.5, 7.2, 7.3, 5.4, 6.9, 4.6, 3.5, 4.1,
            8.4, 8.7, 1.3, 0.2, 3.6, 7.2, 8.1, 6.8, 3.0, 8.5, 6.5, 7.3,
            7.1
        ]
      },
      
      ]
    };

    if (this.chartEl && this.chartEl.nativeElement) {
        opts.chart = {
            type: 'spline',
            renderTo: this.chartEl.nativeElement
        };

        //this._chart = new Highcharts.Chart(opts);
    }
  }

  public ngOnDestroy() {
    this._chart.destroy();
  }

}
