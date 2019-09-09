import { Component, OnInit, Input  } from '@angular/core';

import { ModalController, NavController, NavParams } from '@ionic/angular';


@Component({
  selector: 'app-modals',
  templateUrl: './modals.page.html',
  styleUrls: ['./modals.page.scss'],
})
export class ModalsPage implements OnInit {

  height: number;
  weight: number;
  bmiValue: number;
  bmiMessage: string;


  constructor(private modalController: ModalController, public navCtrl: NavController,
     private navParams: NavParams ) {
  
      }

     
  ngOnInit() {
    
    this.weight = this.navParams.data.weight;
    this.height = this.navParams.data.height;
    this.bmiValue = this.navParams.data.bmiValue;
    this.bmiMessage = this.navParams.data.bmiMessage;
    
  }

    async closeModal() {
      await this.modalController.dismiss();
    }

    getColor(bmiValue){
      switch(this.bmiMessage){
        case 'Underweight':
          return 'red';
          case 'Normal':
            return 'green';
          case 'Overweight':
            return 'orangered';
          case 'Obese':
            return 'darkred';
      }
    }

}