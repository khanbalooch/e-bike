import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {

  nick= 'Dein';
  signupForm: FormGroup;
  constructor(private router: Router, private alertController: AlertController){ }

  ngOnInit() {
    this.signupForm = new FormGroup({
      fname: new FormControl('', Validators.required),
      lname: new FormControl('', Validators.required),
      password: new FormControl('', [Validators.required, Validators.minLength(6)]),
      email: new FormControl('', [Validators.required, Validators.email]),
      consent: new FormControl(null, Validators.required)
    });
  }

  // secondStep(input){
  //   this.step = 1;
  //   this.nick = input === 0 ? 'Dein' : 'lhr';
  // }

  onSubmit(){

    this.presentAlert();
    this.router.navigateByUrl('\login');
  }

  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'E-Mail Bestätigung',
      message: 'Vielen Dank für Ihre Registrierung! Sie erhalten eine E-Mail zur Bestätigung.',
      buttons: ['OK']
    });

    await alert.present();
  }

  get fname(){
    return this.signupForm.get('fname');
  }
  get lname(){
    return this.signupForm.get('lname');
  }
  get email() {
    return this.signupForm.get('email');
  }
  get password() {
    return this.signupForm.get('password');
  }
  get consent(){
    return this.signupForm.get('consent');
  }
}
