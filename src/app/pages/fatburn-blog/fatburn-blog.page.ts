import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-fatburn-blog',
  templateUrl: './fatburn-blog.page.html',
  styleUrls: ['./fatburn-blog.page.scss'],
})
export class FatburnBlogPage implements OnInit {

  constructor(private location: Location, private authService: AuthService) { }

  public back(): void {
    this.location.back();
  }
  ngOnInit() {
  }

}
