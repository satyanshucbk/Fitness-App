import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { StrengthBlogPage } from './strength-blog.page';

const routes: Routes = [
  {
    path: '',
    component: StrengthBlogPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [StrengthBlogPage]
})
export class StrengthBlogPageModule {}
