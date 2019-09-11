import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { YoutubeVideoPlayer } from '@ionic-native/youtube-video-player/ngx';
import { ActivatedRoute } from '@angular/router';

import { AuthService } from '../../services/auth.service';
import { YtService } from '../../services/yt.service';
@Component({
  selector: 'app-result-page',
  templateUrl: './result-page.page.html',
  styleUrls: ['./result-page.page.scss'],
})
export class ResultPagePage implements OnInit {
  videos:any;
  data:any;
  nextPagetoke:String;
  text:string='';



  constructor(private location: Location, private authService: AuthService,
              private  ytService: YtService, private activatedRoute: ActivatedRoute,
              private youtube: YoutubeVideoPlayer) { }
  

  public back(): void {
    this.location.back();
  }
  
  ngOnInit() {
    this.activatedRoute
    .queryParams
    .subscribe(params => {
      // Defaults to 0 if no query param provided.
      this.text = params['page']
      // console.log(params['page']);
      // this.showvideos(params['page'])   
      this.youtube.openVideo(this.text);
    });

  }


  showvideos(text) {
    console.log(text);
    this.ytService.getVideos(text)
    .then(data => {
      this.data = data;
      this.videos=this.data.items
      console.log(this.data);
    });
  }
 
}
