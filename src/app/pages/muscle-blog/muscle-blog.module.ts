import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { MuscleBlogPage } from './muscle-blog.page';

const routes: Routes = [
  {
    path: '',
    component: MuscleBlogPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [MuscleBlogPage]
})
export class MuscleBlogPageModule {}
