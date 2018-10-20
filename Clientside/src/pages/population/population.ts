import { Component,ViewChild } from '@angular/core';
import { NavController, NavParams,Nav} from 'ionic-angular';
import { Chart } from 'chart.js';
import { AppProvider } from '../../providers/app/app';

import { ListPage } from '../list/list';

/**
 * Generated class for the PopulationPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-population',
  templateUrl: 'population.html',
})
export class PopulationPage {

  @ViewChild('lineCanvas') lineCanvas;

  barChart: any;
  doughnutChart: any;
  lineChart: any;
  result:any;
  error:any;
  data = [14, 23, 28, 35, 40, 52, 57];
  label = ["1999", "2003", "2007", "2011", "2013", "2015", "2017"];

  constructor(public navCtrl: NavController, public navParams: NavParams,public nav:Nav,public app:AppProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PopulationPage');
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
                    label: "Population",
                    fill: false,
                    lineTension: 0.1,
                    backgroundColor: "#00FF00",
                    borderColor: "#00FF00",
                    borderCapStyle: 'butt',
                    borderDash: [],
                    borderDashOffset: 0.0,
                    borderJoinStyle: 'miter',
                    pointBorderColor: "#00FF00",
                    pointBackgroundColor: "#fff",
                    pointBorderWidth: 10,
                    pointHoverRadius: 5,
                    pointHoverBackgroundColor: "#00FF00",
                    pointHoverBorderColor: "#00FF00",
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
