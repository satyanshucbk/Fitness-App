import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class YtService {

  apiUrl = 'https://www.googleapis.com/youtube/v3/search';
  // apiKey = 'AIzaSyBb2EaS3vejQ6R8hrZskQ72m5XJN0wv5r8';

  constructor(public http: HttpClient) { 
   
  }


  getVideos(text) {
    return new Promise(resolve => {
      this.http.get(this.apiUrl+'?part=snippet&key=AIzaSyBb2EaS3vejQ6R8hrZskQ72m5XJN0wv5r8&maxResults=10&q='+text).subscribe(data => {
        resolve(data);
      }, err => {
        console.log(err);
      });
    });
  }

  getscrollvideos(text,token) {
    return new Promise(resolve => {
      this.http.get(this.apiUrl+'?part=snippet&key=AIzaSyBb2EaS3vejQ6R8hrZskQ72m5XJN0wv5r8&maxResults=10&q='+text+'&pageToken='+token).subscribe(data => {
        resolve(data);
      }, err => {
        console.log(err);
      });
    });
  }

  lodemoreplaylist(playlistId,nexpage_token) {
    return new Promise(resolve => {
      this.http.get('https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&key=AIzaSyBb2EaS3vejQ6R8hrZskQ72m5XJN0wv5r8&maxResults=10&q=ionic tutorial&playlistId='+playlistId+'&pageToken='+nexpage_token).subscribe(data => {
        resolve(data);
      }, err => {
        console.log(err);
      });
    });
  }

}
