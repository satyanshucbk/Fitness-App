import { Injectable } from '@angular/core';
import { YoutubeVideoPlayer } from '@ionic-native/youtube-video-player/ngx';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class YtService {

  apiUrl = 'https://www.googleapis.com/youtube/v3/search';
  

  constructor(public http: HttpClient, public youtubeVideoPlayer: YoutubeVideoPlayer) { 
   
  }


  getVideos(text) {
    return new Promise(resolve => {
      this.http.get(this.apiUrl+'?part=snippet&key=AIzaSyCuCs1-gqDES6irl0fuTe9ME2p3llia3ac&maxResults=10&q='+text).subscribe(data => {
        resolve(data);
      }, err => {
        console.log(err);
      });
    });
  }

  getscrollvideos(text,token) {
    
    return new Promise(resolve => {
      this.http.get(this.apiUrl+'?part=snippet&key=AIzaSyCuCs1-gqDES6irl0fuTe9ME2p3llia3ac&maxResults=10&q='+text+'&pageToken='+token).subscribe(data => {
        resolve(data);
      }, err => {
        console.log(err);
      });
    });
  }


}
