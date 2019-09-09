import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { HealthBlogsPage } from './health-blogs.page';


const routes: Routes = [
  {
    path: '',
    component: HealthBlogsPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  
  declarations: [HealthBlogsPage]
})
export class HealthBlogsPageModule {}
