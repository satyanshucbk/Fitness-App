import { Component, OnInit } from '@angular/core';
import { ModalController, NavController } from '@ionic/angular';
import { ModalPage } from '../../bmr-modal/modal/modal.page';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
 
@Component({
  selector: 'app-bmr-cal',
  templateUrl: './bmr-cal.page.html',
  styleUrls: ['./bmr-cal.page.scss'],
})
export class BMRCalPage implements OnInit {
  bmrForm: FormGroup;
  height: number;
  weight: number;
  age: number;
  gender: string;
  bmrValue: number;
  // bmrMessage: string;

  error_message = {
    'weight': [
      {type: 'required', message: '*Weight is required'},
    ],
    'height': [
      {type: 'required', message: '*Height is required'},
    ],
    'age': [
      {type: 'required', message: '*enter your age!'},
      {type: 'min', message: '*age should be greater than 0'},
    ],
  
    'gender': [
      {type: 'required', message: '*Select at least on option'},
    ],
    
  }


  constructor( public navCtrl: NavController, public modalController: ModalController,
                public formBuilder: FormBuilder) { }

  ngOnInit() {
    this.bmrForm = this.formBuilder.group ({
      weight: new FormControl('', Validators.compose([
        Validators.required
      ])),
      height: new FormControl('', Validators.compose([
        Validators.required
      ])),
      age: new FormControl('', Validators.compose([
        Validators.required
      ])),
      gender: new FormControl('', Validators.compose([
        Validators.required
      ])),
    })
  }

  async calculateBMR() {

    if(this.gender) {
      if(this.gender === "male" && this.weight > 0 && this.height > 0 && this.age > 0) {
        //Harris Benedict Equation for male BMR calculation
        let finalBmr = 66 + (13.7 * this.weight) + (5 * this.height) - (6.8 * this.age);
        this.bmrValue = parseFloat(finalBmr.toFixed());  
           
      } 
      else{
        //Harris Benedict Equation for female BMR calculation
        let finalBmr = 655 + (9.6 * this.weight) + (1.8 * this.height) - (4.7 * this.age);
        
        this.bmrValue = parseFloat(finalBmr.toFixed());
    
      }
    }

    const modal = await this.modalController.create({  
      component: ModalPage,
      componentProps: {
        height : this.height,
        weight : this.weight,
        age: this.age,
        bmrValue : this.bmrValue,
        
      }
      
    });
    return await modal.present();
  }
}
