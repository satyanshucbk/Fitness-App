import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators} from '@angular/forms';
import { AlertController } from '@ionic/angular';

import { Router } from '@angular/router';



@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.page.html',
  styleUrls: ['./contact-us.page.scss'],
})
export class ContactUsPage implements OnInit {

  contactForm: FormGroup;
  contactData: any;
  submitted = false;
  error_message = {
    'name': [
      {type: 'required', message:'*Name is required'}
    ],
    'email': [
      {type: 'required', message: '*email is required'},
      { type: 'pattern', message: '*email should be in someone@mail.com form'}
    ],
    'contact': [
      {type: 'required', message: '*Contact number is required'},
      // {type: 'maxLength', message: '*Contact Should be 10 '},
      // {type: 'minLength', message: '*Contact Should not be more then 10 '},
      {type: 'pattern', message: '*contact should be 10 numbers.'}
    ],
    'message':[
      {type:'required', message: 'Please enter your messages'},
      {type: 'maxLength', message: 'Maximum word limit is 250 words.'}
    ]
  }
  
  constructor( private router: Router, public formBuilder: FormBuilder,
                public alertController: AlertController) {
              }



  ngOnInit() {
    this.contactForm = this.formBuilder.group({
      name: new FormControl('',Validators.compose([
        Validators.required,
        Validators.minLength(6),
        Validators.maxLength(25),
      ])),
      email: new FormControl('',Validators.compose([
        Validators.required,
        Validators.minLength(6),
        Validators.maxLength(25),
        Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
      ])),
      contact: new FormControl('', Validators.compose([
        Validators.required,
        Validators.minLength(10),
        Validators.maxLength(10),
      //  Validators.pattern(/^[6-9]\d{9}$/)
      ])),
      message: new FormControl('', Validators.compose([
        Validators.required,
        Validators.maxLength(250)
      ]))
    })

  }
 

 
  async sendMessage() {
    this.submitted = true;
    this.contactData =  {
      'name': this.contactForm.value.name,
      'email': this.contactForm.value.email,
      'contact': this.contactForm.value.contact,
      'message': this.contactForm.value.message
    }
    if(this.contactData.name && this.contactData.email 
      && this.contactData.contact && this.contactData.message){
        localStorage.setItem("contactData", JSON.stringify(this.contactData));
        console.log(JSON.parse(localStorage.getItem("contactData")));
      } else {
        const alert = await this.alertController.create({
          header: 'Alert',
          message: 'field can`t be blank.',
          buttons: ['OK']
        });
    
        await alert.present();
      }

  }
}
