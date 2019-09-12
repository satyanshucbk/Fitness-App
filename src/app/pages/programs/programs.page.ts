import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { YtService } from '../../services/yt.service';
import { LoadingController } from '@ionic/angular';


@Component({
  selector: 'app-programs',
  templateUrl: './programs.page.html',
  styleUrls: ['./programs.page.scss'],
})
export class ProgramsPage implements OnInit {
  text: string;
  txt: any;

  constructor( public router: Router, public yt: YtService, public loadingController: LoadingController) { }

  async getVideos(text) {
    

    const loading = await this.loadingController.create({
      spinner: 'bubbles',
      duration: 2000,
      message: 'Please wait...',
      translucent: true,
    });
    this.router.navigate(['playlist-page'], { queryParams: { page: text } } );
    console.log(text);
    return await loading.present();
    
  }
  ngOnInit() {
  }

}
