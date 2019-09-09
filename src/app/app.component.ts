import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  public appPages = [
    {
      title: 'Home',
      url: '/home',
      icon: 'home'
    },
    // {
    //   title: 'About Us',
    //   url: '/about-us',
    //   icon: 'contact'
    // },
    {
      title: 'Programs',
      url: '/programs',
      icon: 'calendar'
    },
    {
      title: 'BMI Calculator',
      url: '/bmi-cal',
      icon: 'medkit'
    },
    {
      title: 'BMR Calculator',
      url: '/bmr-cal',
      icon: 'medkit'
    },
    {
      title: 'Health Blogs',
      url: '/health-blogs',
      icon: 'at'
    },
    {
      title: 'Health Tips',
      url: '/health-tips',
      icon: 'heart'
    },
    {
      title: 'Contact Us',
      url: '/contact-us',
      icon: 'call'
    },
  ];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
}
