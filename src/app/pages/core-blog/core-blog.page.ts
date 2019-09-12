import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-core-blog',
  templateUrl: './core-blog.page.html',
  styleUrls: ['./core-blog.page.scss'],
})
export class CoreBlogPage implements OnInit {

  constructor(private location: Location, private authService: AuthService) { }

  public back(): void {
    this.location.back();
  }

  ngOnInit() {
  }

}
