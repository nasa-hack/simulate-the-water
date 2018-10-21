import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';


import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { SosPage } from '../pages/sos/sos';
import { AppProvider } from '../providers/app/app';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  sub:any;

  rootPage: any = HomePage;

  pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform,public app:AppProvider, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    // setInterval(function(){
    //   this.app.getDisplacementData(localStorage.getItem("lat"),localStorage.getItem("lng")).subscribe(res=>{
    //     this.result=res;
    //       this.result.data.map(r=>{
    //            this.label.push(r[1]);
    //            this.data.push(r[2]);
    //       })
        
    //  },err=>{
    //      this.error="Someting Went Wrong";
    //  });
    // },3000);
    this.initializeApp();
    
    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Home',component: HomePage},
      { title: 'Analysis List',component: ListPage},
      { title: 'S.O.S',component: SosPage},
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
      
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
