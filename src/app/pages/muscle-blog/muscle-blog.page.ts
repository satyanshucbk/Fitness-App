import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-muscle-blog',
  templateUrl: './muscle-blog.page.html',
  styleUrls: ['./muscle-blog.page.scss'],
})
export class MuscleBlogPage implements OnInit {

  constructor(private location: Location, private authService: AuthService) { }
  
  public back(): void {
    this.location.back();
  }
  ngOnInit() {
  }

}
