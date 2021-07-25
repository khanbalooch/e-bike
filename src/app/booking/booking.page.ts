import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.page.html',
  styleUrls: ['./booking.page.scss'],
})
export class BookingPage implements OnInit {

  details: any = null;
  startDate: string = new Date().toISOString();
  endDate: string = new Date().toISOString();
  numberOfBikes = 1;
  lightingSetPrice = 400;
  numberOfLightingSet = 0;
  helmetPrice = 400;
  numberOfHelmets = 0;
  numberOfPannenKits = 0;
  pannenKitPrice = 0;
  backPackSalomonTrailblazerPrice = 300;
  numberOfBackPackSalomonTrailblazer = 0;
  totalPrice = 0;
  constructor(private router: ActivatedRoute) { }

  ngOnInit() {
    this.router.queryParams.subscribe(params => {
      this.details = JSON.parse(params.bikeDetails);
      console.log(this.details);
    });
  }

  // eslint-disable-next-line @angular-eslint/use-lifecycle-interface
  ngDoCheck(){
    this.calculate();
  }

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

}