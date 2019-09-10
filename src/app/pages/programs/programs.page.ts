import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { YtService } from '../../services/yt.service';

@Component({
  selector: 'app-programs',
  templateUrl: './programs.page.html',
  styleUrls: ['./programs.page.scss'],
})
export class ProgramsPage implements OnInit {
  text: string;
  txt: any;

  constructor( public router: Router, public yt: YtService) { }

  getVideos(text) {
    this.router.navigate(['playlist-page'], { queryParams: { page: text } } );
    console.log(text);
  }
  ngOnInit() {
  }

}
