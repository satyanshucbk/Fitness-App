import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';
import { YoutubePipe } from '../../youtube.pipe';
import { ResultPagePage } from './result-page.page';

const routes: Routes = [
  {
    path: '',
    component: ResultPagePage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ResultPagePage, YoutubePipe]
})
export class ResultPagePageModule {}
