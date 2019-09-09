import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { PlaylistPagePage } from './playlist-page.page';
import { ProgramsPage } from '../programs/programs.page';

const routes: Routes = [
  {
    path: '',
    component: PlaylistPagePage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ], providers: [ProgramsPage],
  declarations: [PlaylistPagePage]
})
export class PlaylistPagePageModule {}
