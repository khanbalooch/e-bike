import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.page.html',
  styleUrls: ['./booking.page.scss'],
})
export class BookingPage implements OnInit {
  showAlrt = true;
  details: any = null;
  startDate: string = new Date().toISOString();
  endDate: string = new Date().toISOString();
  numberOfBikes = 1;
  lightingSetPrice = 4;
  numberOfLightingSet = 0;
  helmetPrice = 4;
  numberOfHelmets = 0;
  numberOfPannenKits = 0;
  pannenKitPrice = 0;
  backPackSalomonTrailblazerPrice = 3;
  numberOfBackPackSalomonTrailblazer = 0;
  totalPrice = 0;
  constructor(private actRoute: ActivatedRoute, private router: Router, private alertController: AlertController) { }

  ngOnInit() {
    this.actRoute.queryParams.subscribe(params => {
      this.details = JSON.parse(params.bikeDetails);
      console.log(this.details);
    });
    this.calculate();
  }

  // eslint-disable-next-line @angular-eslint/use-lifecycle-interface
  // ngDoCheck(){
  //   this.calculate();
  // }

  calculate(){
    // calculate number of days
    const oneDay = 24 * 60 * 60 * 1000; // hours*minutes*seconds*milliseconds
    const date1 = new Date(this.startDate);
    const date2 = new Date(this.endDate);
    const days = Math.round(Math.abs((date1.valueOf() - date2.valueOf()) / oneDay)) + 1;

    this.totalPrice =
      (days * this.numberOfBikes * this.details.bike.price ) +
      (this.numberOfLightingSet * this.lightingSetPrice) +
      (this.numberOfHelmets * this.helmetPrice) +
      (this.numberOfPannenKits * this.pannenKitPrice) +
      (this.numberOfBackPackSalomonTrailblazer * this.backPackSalomonTrailblazerPrice);
  }

  incrementNumberOfBikes(){
    this.numberOfBikes++;
    this.calculate();
  }
  decrementNumberOfBikes(){
    this.numberOfBikes = this.numberOfBikes > 1 ? this.numberOfBikes -1 : this.numberOfBikes;
    this.calculate();
  }

  incrementNumberOfLightingSet(){
    this.numberOfLightingSet++;
    this.calculate();
  }
  decrementNumberOfLightingSet(){
    this.numberOfLightingSet = this.numberOfLightingSet > 0 ? this.numberOfLightingSet -1 : this.numberOfLightingSet;
    this.calculate();
  }
  incrementNumberOfHelmets(){
    this.numberOfHelmets++;
    this.calculate();
  }
  decrementNumberOfHelmets(){
    this.numberOfHelmets = this.numberOfHelmets > 0 ? this.numberOfHelmets -1 : this.numberOfHelmets;
    this.calculate();
  }

  incrementNumberOfPannenKits(){
    this.numberOfPannenKits++;
    // this.calculate();
  }
  decrementNumberOfPannenKits(){
    this.numberOfPannenKits = this.numberOfPannenKits > 0 ? this.numberOfPannenKits -1 : this.numberOfPannenKits;
  }
  incrementNumberOfBackPacks(){
    this.numberOfBackPackSalomonTrailblazer++;
    this.calculate();
  }
  decrementNumberOfBackPacks(){
    this.numberOfBackPackSalomonTrailblazer =
    this.numberOfBackPackSalomonTrailblazer > 0 ? this.numberOfBackPackSalomonTrailblazer -1 : this.numberOfBackPackSalomonTrailblazer;
    this.calculate();
  }

  isTimePeriodValid(){
    const date1 = new Date(this.startDate);
    const date2 = new Date(this.endDate);
    return date1 <= date2;
  }
  gotoPayment(){
    //check if days are good
    if(this.showAlrt){
      this.presentAlert();
      this.showAlrt = !this.showAlrt;
    }else{
      this.router.navigateByUrl('/payment');
    }
  }

  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Ungültiger Zeitraum',
      message: 'Der ausgewählte Zeitraum ist nicht verfügbar. Bitte wählen Sie ein anderes Datum.',
      buttons: ['OK']
    });

    await alert.present();
  }

}
