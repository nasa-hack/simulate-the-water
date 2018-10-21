import { Component,ViewChild} from '@angular/core';
import { NavController, NavParams,Nav} from 'ionic-angular';
import { Chart } from 'chart.js';
import 'rxjs/add/operator/map'
import { ListPage } from '../list/list';
import { AppProvider } from '../../providers/app/app';
/**
 * Generated class for the DispPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-disp',
  templateUrl: 'disp.html',
})
export class DispPage {


  @ViewChild('lineCanvas') lineCanvas;
  barChart: any;
  doughnutChart: any;
  lineChart: any;
  result:any;
  error:any;
  data = [];
  label=[];


  constructor(public navCtrl: NavController,public app:AppProvider,public nav:Nav, public navParams: NavParams) {
  this.getdata();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DispPage');
    this.Chart();
  }

  getdata(){
    this.app.getDisplacementData(localStorage.getItem("lat"),localStorage.getItem("lng")).subscribe(res=>{
     this.result=res;
       this.result.data.map(r=>{
            this.label.push(r[1]);
            this.data.push(r[2]);
       })
     
  },err=>{
      this.error="Someting Went Wrong";
  });
   }
   
   Chart(){
    this.lineChart = new Chart(this.lineCanvas.nativeElement, {

        type: 'line',
        data: {
            labels: this.label,
            datasets: [
                {
                    label: "PreMonsoon",
                    fill: false,
                    lineTension: 0.1,
                    backgroundColor: "rgba(75,192,192,1)",
                    borderColor: "rgba(75,192,192,1)",
                    borderCapStyle: 'butt',
                    borderDash: [],
                    borderDashOffset: 0.0,
                    borderJoinStyle: 'miter',
                    pointBorderColor: "rgba(75,192,192,1)",
                    pointBackgroundColor: "#fff",
                    pointBorderWidth: 1,
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
  
    backButton(){
      this.nav.setRoot(ListPage);
    }

}
