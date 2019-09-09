import { Component, OnInit } from '@angular/core';
import { NavParams } from '@ionic/angular';
import { YtService } from '../../services/yt.service';
import { AuthService } from '../../services/auth.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-playlist-page',
  templateUrl: './playlist-page.page.html',
  styleUrls: ['./playlist-page.page.scss'],
})
export class PlaylistPagePage implements OnInit {

  videos:any;
  data:any;
  nextPagetoke:String;
  text:string;
  playlist_id:string;

  constructor(public ytService: YtService, private location: Location, private authService: AuthService, public navParams: NavParams) {
    this.text=navParams.get('text');
    this.showvideos(this.text);
    console.log(this.text)
   }

   public back(): void {
    this.location.back();
  }

  ngOnInit() {
 
  }
  showvideos(text) {
    this.ytService.getVideos(text)
    .then(data => {
      this.data = data;
      this.videos=this.data.items
      this.nextPagetoke=this.data.nextPageToken;
      console.log(this.data);
    });
  }

  doInfinite(infiniteScroll){
    this.ytService.lodemoreplaylist(this.playlist_id,this.nextPagetoke)
    .then(data => {
      this.data = data;
      for(let i=0; i<this.data.items.length; i++) {
        this.videos.push(this.data.items[i]);
      }
      this.nextPagetoke=this.data.nextPageToken;
      infiniteScroll.complete();

      if (this.videos.length === this.data.pageInfo.totalResults) {
        infiniteScroll.enable(false);
      }

    });
    
  }

}
