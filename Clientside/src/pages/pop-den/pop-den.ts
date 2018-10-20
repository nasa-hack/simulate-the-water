import { Component,ViewChild } from '@angular/core';
import { NavController, NavParams,Nav} from 'ionic-angular';
import { Chart } from 'chart.js';
import { AppProvider } from '../../providers/app/app';

import { ListPage } from '../list/list';
/**
 * Generated class for the PopDenPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-pop-den',
  templateUrl: 'pop-den.html',
})
export class PopDenPage {
  @ViewChild('lineCanvas') lineCanvas;

    barChart: any;
    doughnutChart: any;
    lineChart: any;
    result:any;
    error:any;
    data = [24, 26, 28, 32, 36, 40, 46];
    label = ["1999", "2003", "2007", "2011", "2013", "2015", "2017"];

  constructor(public navCtrl: NavController, public navParams: NavParams,public nav:Nav,public app:AppProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PopDenPage');
    this.Chart();
    this.getdata();
  }

  Chart(){
    this.lineChart = new Chart(this.lineCanvas.nativeElement, {

        type: 'line',
        data: {
            labels: this.label,
            datasets: [
                {
                    label: "Population Density",
                    fill: false,
                    lineTension: 0.2,
                    backgroundColor: "#FF0000",
                    borderColor: "#FF0000",
                    borderCapStyle: 'butt',
                    borderDash: [],
                    borderDashOffset: 0.0,
                    borderJoinStyle: 'miter',
                    pointBorderColor: "#FF0000",
                    pointBackgroundColor: "#fff",
                    pointBorderWidth: 10,
                    pointHoverRadius: 8,
                    pointHoverBackgroundColor: "#FF0000",
                    pointHoverBorderColor: "#FF0000",
                    pointHoverBorderWidth: 2,
                    pointRadius: 1,
                    pointHitRadius: 10,
                    data: this.data,
                    spanGaps: false,
                }
            ]
        }

    });

}

getdata(){
  this.app.getData(localStorage.getItem("lat"),localStorage.getItem("lng")).subscribe(res=>{
    this.result=res;
},err=>{
    this.error="Someting Went Wrong";
});
 }


  backButton(){
    this.nav.setRoot(ListPage);
  }

}
