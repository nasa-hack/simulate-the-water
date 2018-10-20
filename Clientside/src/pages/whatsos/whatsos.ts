import { Component } from '@angular/core';
import { NavController, NavParams,Nav } from 'ionic-angular';

import { HomePage } from '../home/home';
/**
 * Generated class for the WhatsosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-whatsos',
  templateUrl: 'whatsos.html',
})
export class WhatsosPage {

  constructor(public navCtrl: NavController,public nav:Nav, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad WhatsosPage');
  }

  backButton(){
    this.nav.setRoot(HomePage);
  }


}
