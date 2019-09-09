import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ContactUsPage } from './contact-us.page';

const routes: Routes = [
  {
    path: '',
    component: ContactUsPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule, 
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ContactUsPage]
})
export class ContactUsPageModule {}
