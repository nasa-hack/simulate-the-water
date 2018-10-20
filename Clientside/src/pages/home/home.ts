import { Component , ViewChild, ElementRef} from '@angular/core';
import { NavController,Nav } from 'ionic-angular';
import { ModalController } from 'ionic-angular';
import leaflet from 'leaflet';

import { ListPage } from '../list/list';
import { WhatsosPage } from '../whatsos/whatsos';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html' 
})
export class HomePage {
  @ViewChild('map') mapContainer: ElementRef;
  map: any;
  constructor(public navCtrl: NavController,public modalCtrl: ModalController,public nav:Nav) {

  }

  ionViewDidEnter() {
    this.loadmap();
  }

  presentModal() {
    this.navCtrl.push(WhatsosPage);
    this.map.remove();
  }

  loadmap() {
    this.map = leaflet.map("map").fitWorld();
    leaflet.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attributions: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
      maxZoom: 18
    }).addTo(this.map);
    this.map.locate({
      setView: true,
      maxZoom: 10
    }).on('click',(e)=>{
      var popLocation= e.latlng;
      localStorage.setItem('lat',popLocation['lat']);
      localStorage.setItem('lng',popLocation['lng']);
      var popup = leaflet.popup()
      .setLatLng(popLocation)
      .setContent("Lat, Lon : "+popLocation)
      .openOn(this.map)
      this.nav.setRoot(ListPage);
    }).on('locationfound', (e) => {
      let markerGroup = leaflet.featureGroup();
      localStorage.setItem('lat',e.latitude);
      localStorage.setItem('lng',e.longitude);
      let marker: any = leaflet.marker([e.latitude, e.longitude]).on('click', () => {
        alert('Marker clicked');
      })
      markerGroup.addLayer(marker);
      this.map.addLayer(markerGroup);
      }).on('locationerror', (err) => {
        alert(err.message);
    })
 

  }
 

 
}
