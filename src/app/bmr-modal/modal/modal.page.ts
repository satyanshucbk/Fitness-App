import { Component, OnInit , Input} from '@angular/core';
import { ModalController, NavController, NavParams } from '@ionic/angular';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.page.html',
  styleUrls: ['./modal.page.scss'],
})
export class ModalPage implements OnInit {

  
  height: number;
  weight: number;
  age: number;
  gender: string;
  bmrValue: number;
  // bmrMessage: string;

  constructor(private modalController: ModalController, public navCtrl: NavController,
    private navParams: NavParams) { }

  ngOnInit() {
      this.height = this.navParams.data.height;
      this.weight = this.navParams.data.weight;
      this.age = this.navParams.data.age;
      this.gender = this.navParams.data.gender;
      this.bmrValue = this.navParams.data.bmrValue;
  }

  async closeModal() {
    await this.modalController.dismiss();
  }


}
