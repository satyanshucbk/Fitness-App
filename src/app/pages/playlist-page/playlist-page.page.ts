import { Component, OnInit } from '@angular/core';
import { YtService } from '../../services/yt.service';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { Location } from '@angular/common';
import { YoutubeVideoPlayer } from '@ionic-native/youtube-video-player/ngx';

@Component({
  selector: 'app-playlist-page',
  templateUrl: './playlist-page.page.html',
  styleUrls: ['./playlist-page.page.scss'],
})
export class PlaylistPagePage implements OnInit {

  videos:any;
  data:any;
  nextPagetoke:String;
  text:string='';


  constructor(public ytService: YtService, private location: Location, 
              private authService: AuthService, private activatedRoute: ActivatedRoute,
              public router: Router,  private youtube: YoutubeVideoPlayer) {

   }

  


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
      this.showvideos(params['page'])    
    });

  }

  playVideos(videoId){
    debugger
    this.youtube.openVideo(videoId);
    // this.router.navigate(['result-page'], { queryParams: { page: videoId} } );
    console.log(videoId);
  }
   
  showvideos(text) {
    console.log(text);
    this.ytService.getVideos(text)
    .then(data => {
      this.data = data;
      this.videos=this.data.items;
      this.nextPagetoke=this.data.nextPageToken;
      console.log(this.data);
    });
  }
 
  doInfinite(infiniteScroll) {
    this.ytService.getscrollvideos(this.text,this.nextPagetoke)
    .then(data => {
      this.data = data;
      for(let i=0; i<this.data.items.length; i++) {
        this.videos.push(this.data.items[i]);
      }
      this.nextPagetoke=this.data.nextPageToken;
      
      infiniteScroll.target.complete();

      if (this.videos.length === this.data.pageInfo.totalResults) {
        infiniteScroll.enable(false);
      }

    });
}


}