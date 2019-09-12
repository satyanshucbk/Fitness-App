import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-strength-blog',
  templateUrl: './strength-blog.page.html',
  styleUrls: ['./strength-blog.page.scss'],
})
export class StrengthBlogPage implements OnInit {

  constructor(private location: Location, private authService: AuthService) { }

  public back(): void {
    this.location.back();
  }
  ngOnInit() {
  }

}
