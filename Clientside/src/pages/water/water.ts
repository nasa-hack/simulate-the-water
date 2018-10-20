import { Component,ViewChild} from '@angular/core';
import { NavController, NavParams,Nav} from 'ionic-angular';
import { Chart } from 'chart.js';
import { AppProvider } from '../../providers/app/app';

import { ListPage } from '../list/list';
/**
 * Generated class for the WaterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-water',
  templateUrl: 'water.html',
})
export class WaterPage {
  

  @ViewChild('lineCanvas') lineCanvas;

    barChart: any;
    doughnutChart: any;
    lineChart: any;
    result:any;
    error:any;
    data = [65, 59, 80, 81, 56, 55, 40];
    label = ["1999", "2003", "2007", "2011", "2013", "2015", "2017"];

  constructor(public navCtrl: NavController, public navParams: NavParams,public nav:Nav,public app:AppProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad WaterPage');
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
                        label: "Water level",
                        fill: false,
                        lineTension: 0.2,
                        backgroundColor: "rgba(75,192,192,0.4)",
                        borderColor: "rgba(75,192,192,1)",
                        borderCapStyle: 'butt',
                        borderDash: [],
                        borderDashOffset: 0.0,
                        borderJoinStyle: 'miter',
                        pointBorderColor: "rgba(75,192,192,1)",
                        pointBackgroundColor: "#fff",
                        pointBorderWidth: 10,
                        pointHoverRadius: 5,
                        pointHoverBackgroundColor: "rgba(75,192,192,1)",
                        pointHoverBorderColor: "rgba(220,220,220,1)",
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
      console.log(this.result)
  },err=>{
      this.error="Someting Went Wrong";
  });
   }
  
 
  backButton(){
    this.nav.setRoot(ListPage);
  }

}
