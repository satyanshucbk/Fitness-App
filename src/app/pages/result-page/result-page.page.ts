import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-result-page',
  templateUrl: './result-page.page.html',
  styleUrls: ['./result-page.page.scss'],
})
export class ResultPagePage implements OnInit {

  constructor(private location: Location, private authService: AuthService) { }
  
  
  public back(): void {
    this.location.back();
  }
  
  ngOnInit() {
  }

}
