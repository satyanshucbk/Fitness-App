import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private router: Router) {}


  program() {
    this.router.navigate(['/programs']);
  }
  bmi() {
    this.router.navigate(['/bmi-cal']);
  }
  bmr() {
    this.router.navigate(['bmr-cal']);
  }
  healthBlogs() {
    this.router.navigate(['health-blogs']);
  }
  healthTips() {
    this.router.navigate(['/health-tips']);
  }
  contact() {
    this.router.navigate(['/contact-us']);
  }
}
