import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-yoga-blog',
  templateUrl: './yoga-blog.page.html',
  styleUrls: ['./yoga-blog.page.scss'],
})
export class YogaBlogPage implements OnInit {

  constructor(private location: Location, private authService: AuthService) { }

  public back(): void {
    this.location.back();
  }
  ngOnInit() {
  }

}
