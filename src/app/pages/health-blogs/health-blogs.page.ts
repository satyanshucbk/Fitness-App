import { Component, OnInit } from '@angular/core';
import { InAppBrowser, InAppBrowserOptions } from '@ionic-native/in-app-browser/ngx';
import { Router } from '@angular/router';

@Component({
  selector: 'app-health-blogs',
  templateUrl: './health-blogs.page.html',
  styleUrls: ['./health-blogs.page.scss'],
})
export class HealthBlogsPage implements OnInit {

  constructor( private ab: InAppBrowser , public router:Router) { }

  ngOnInit() {
  }

  coreBrowser() {

    //  this.ab.create('https://www.core3training.com/core-and-abs/','_self',
    //  {location:'no',
    //   zoom:'no',
    // hidenavigationbuttons: 'yes',
    // toolbar:'no',
    // footer:'no'});

    this.router.navigate(['core-blog']);
    
    
  }

  strengthBrowser() {
  //   this.ab.create('https://www.nerdfitness.com/blog/strength-training-101/','_self',
  //   {location:'no',
  //    zoom:'no',
  //  hidenavigationbuttons: 'yes',
  //  toolbar:'no',
  //  footer:'no'});
  this.router.navigate(['strength-blog']);
  }

  muscleBrowser() {
  //   this.ab.create('https://www.runtastic.com/blog/en/muscle-gain-101/','_self',
  //   {location:'no',
  //    zoom:'no',
  //  hidenavigationbuttons: 'yes',
  //  toolbar:'no',
  //   footer:'no'});
  this.router.navigate(['muscle-blog']);
  }

  fatLossBrowser() {
  //   this.ab.create('https://www.redbull.com/in-en/8-of-the-best-exercises-to-burn-fat','_self',
  //   {location:'no',
  //    zoom:'no',
  //  hidenavigationbuttons: 'yes',
  //  toolbar:'no',
  //   footer:'no',
  //   });
  this.router.navigate(['fatburn-blog']);
  }

  yogaBrowser () {
  //   this.ab.create('https://www.aurawellnesscenter.com/2019/08/13/how-yoga-can-lift-your-spirits/','_self',
  //   {location:'no',
  //    zoom:'no',
  //  hidenavigationbuttons: 'yes',
  //  toolbar:'no',
  //   footer:'no',
  //   });
  this.router.navigate(['yoga-blog']);
  }

}
