import { Component, OnInit } from '@angular/core';
import { ModalController, NavController } from '@ionic/angular';
import { ModalsPage } from '../../bmi-modal/modals/modals.page';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-bmi-cal',
  templateUrl: './bmi-cal.page.html',
  styleUrls: ['./bmi-cal.page.scss'],
})
export class BMICalPage implements OnInit {
  bmiForm: FormGroup;
  height: number;
  weight: number;
  bmiValue: number;
  bmiMessage: string;

  error_message = {
    'weight': [
      {type: 'required', message: '*Weight is required'},
    ],
    'height': [
      {type: 'required', message: '*Height is required'},
    ]
  }
  constructor(public navCtrl: NavController, public modalController: ModalController,
              public formbuilder: FormBuilder) { }

  ngOnInit() {
    this.bmiForm = this.formbuilder.group({
      weight: new FormControl('', Validators.compose([
        Validators.required
      ])),
      height: new FormControl('', Validators.compose([
        Validators.required
      ]))
    })
  }

  async calculateBMI() {
    
    if (this.weight > 0 && this.height > 0) {
        let finalBmi = this.weight / (this.height / 100 * this.height / 100);
       this.bmiValue = parseFloat(finalBmi.toFixed(2));
        this.setBMIMessage();
    }
   
    
      const modal = await this.modalController.create({  
      component: ModalsPage,
      componentProps: {
        weight : this.weight,
        bmiValue : this.bmiValue,
        height : this.height,
        bmiMessage : this.bmiMessage
      }
      
    });
    
    return await modal.present();
    
  }
  
  

  // setBMIMessage will set the text message based on the value of BMI
  private async setBMIMessage() {
 
        
        if (this.bmiValue < 18.5) {
          this.bmiMessage = "Underweight"
        
        }
      
        if (this.bmiValue > 18.5 && this.bmiValue < 25) {
          this.bmiMessage = "Normal"
          
        }
      
        if (this.bmiValue > 25 && this.bmiValue < 30) {
          this.bmiMessage = "Overweight"
        }
      
        if (this.bmiValue > 30) {
          this.bmiMessage = "Obese"
        }
  }

  // getColor(bmiValue){
  //   switch(this.bmiMessage){
  //     case 'Underweight':
  //       return 'red';
  //       case 'Normal':
  //         return 'green';
  //       case 'Overweight':
  //         return 'orangered';
  //       case 'Obese':
  //         return 'darkred';
  //   }
  // }
}