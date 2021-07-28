import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.page.html',
  styleUrls: ['./payment.page.scss'],
})
export class PaymentPage implements OnInit {

  step = 0;
  paymentForm:  FormGroup;
  contactForm: FormGroup;
  constructor(private fb: FormBuilder, private router: Router, private alertController: AlertController) {
   }

  ngOnInit() {
    this.contactForm = this.fb.group({
      nick: new FormControl('', Validators.required),
      name: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.email]),
      address: new FormControl('', Validators.required),
      city: new FormControl('', Validators.required),
      state: new FormControl('', Validators.required),
      zipcode: new FormControl('', Validators.required),
    });

    this.paymentForm = this.fb.group({
      credcard: new FormControl('', [Validators.required]),
      exp: new FormControl('',Validators.required),
      cvv: new FormControl('', [Validators.required, Validators.maxLength(3)]),
      method: new FormControl('', Validators.required),
    });
  }

  get name(){
    return this.contactForm.get('name');
  }
  get email(){
    return this.contactForm.get('email');
  }
  get address(){
    return this.contactForm.get('address');
  }
  get city(){
    return this.contactForm.get('city');
  }
  get state(){
    return this.contactForm.get('state');
  }
  get zipcode(){
    return this.contactForm.get('zipcode');
  }
  get credcard(){
    return this.paymentForm.get('credcard');
  }
  get exp(){
    return this.paymentForm.get('exp');
  }
  get cvv(){
    return this.paymentForm.get('cvv');
  }
  get method(){
    return this.paymentForm.get('method');
  }

  paypalMethod(){
    this.presentAlert();
    this.router.navigateByUrl('/main/list');
    this.step = 0;
  }

  creditCardMethod(){
    this.paymentForm.controls.method.setValue('paypal');
    this.step = 2;
  }
  onSubmit(){
   this.step = 1;
  }

  processPayment(){
    this.presentAlert();
    this.step = 0;
    this.router.navigateByUrl('main/list');
  }

  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Vielen Dank',
      message: 'Vielen Dank für eine Bestätigung. Sie erhalten iene Bestätigung per E-Mail',
      buttons: ['OK'],
    });

    await alert.present();
  }

}
