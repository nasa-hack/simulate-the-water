import { Component} from '@angular/core';
import { NavController, NavParams,Nav } from 'ionic-angular';
import { AlertController } from 'ionic-angular';

// import Swal from 'sweetalert2'

import { RainPage } from '../rain/rain';
import { PopulationPage } from '../population/population';
import { PopDenPage } from '../pop-den/pop-den';
import { WaterPage } from '../water/water';
import { DispPage } from '../disp/disp';
import { RefugPage } from '../refug/refug';

@Component({
  selector: 'page-list',
  templateUrl: 'list.html'
})
export class ListPage {


  selectedItem: any;
  icons: string[];
  items: any;

  constructor(public navCtrl: NavController,public alertCtrl: AlertController, public navParams: NavParams,public nav:Nav) {
    // If we navigated to this page, we will have an item available as a nav param
    this.selectedItem = navParams.get('item');

    // Swal(
    //   'location',
    //   "latitude "+localStorage.getItem("lat")+"\n"+" longitude "+localStorage.getItem("lng"),
    // )
    const alert = this.alertCtrl.create({
      title: 'location',
      subTitle: "latitude:-"+localStorage.getItem("lat")+"\n"+" longitude :- "+localStorage.getItem("lng"),
      buttons: ['OK']
    });
    alert.present();

    this.items = [
      {
        name:"Migrant",
        description:"Human migration is the movement by people from one place to another with the intentions of settling, permanently or temporarily in a new location. The movement is often over long distances and from one country to another, but internal migration is also possible; indeed, this is the dominant form globally. ",
        img:"https://www.dw.com/image/19116722_303.jpg",
        component:DispPage
      },
      {
        name:"Refugees",
        description:"A refugee, generally speaking, is a displaced person who has been forced to cross national boundaries and who cannot return home safely. Such a person may be called an asylum seeker until granted refugee status by the contracting state or the UNHCR if they formally make a claim for asylum.",
        img:"https://g8fip1kplyr33r3krz5b97d1-wpengine.netdna-ssl.com/wp-content/uploads/2016/05/GettyImages-494326182-1160x772.jpg",
        component:RefugPage
      },
      {
    name:"Water Level Rise/Falls",
    description:"Water level or gauge height or stage is the elevation of the free surface of a stream, lake or reservoir relative to a specified vertical datum.",
    img:"https://resize.indiatvnews.com/en/resize/newbucket/715_-/2016/06/water-bodies-1466850920.jpg",
    component:WaterPage
    },
    {
      name:"Precipitation Rate",
      description:"In the irrigation industry, matched precipitation rate is a term that is used to calculate the amount of precipitation in a given area is uniform. In order to be  all sprinkler heads in a given zone must have the same rate of precipitation.",
      img:"http://lestimes.com/wp-content/uploads/2017/09/rainfall.jpg",
      component:RainPage
    },
    {
      name:"Population",
      description:"A population is the number of living things that live together in the same place. A city's population is the number of people living in that city. These people are called inhabitants or residents.",
      img:"https://www.thenational.ae/image/policy:1.619311:1502634091/RTX2WC3Q.jpg?f=16x9&w=1200&$p$f$w=5df79b6",
      component:PopulationPage
    },
    {
      name:"Population Density",
      description:"Population density is a measurement of population per unit area or unit volume; it is a quantity of type number density. It is frequently applied to living organisms, and most of the time to humans. It is a key geographical term.",
      img:"https://www.worldatlas.com/r/w728-h425-c728x425/upload/53/38/9a/shutterstock-331564118.jpg",
      component:PopDenPage
    }
  ];

  
  }

  itemTapped(event, item) {
    // That's right, we're pushing to ourselves!
    this.navCtrl.push(ListPage, {
      item: item
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
  
}
