import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationExtras } from "@angular/router";
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-bike-details',
  templateUrl: './bike-details.page.html',
  styleUrls: ['./bike-details.page.scss'],
})
export class BikeDetailsPage implements OnInit {

  details: any = null;
  readMore = false;
  constructor(private router: ActivatedRoute, private navController: NavController) { }

  async ngOnInit() {
    this.router.queryParams.subscribe(params => {
      this.details = JSON.parse(params.bikeDetails);
      console.log(this.details);
    });
  }

  gotoBookingPage(){
    const navigationExtras: NavigationExtras = {
      queryParams: { bikeDetails: JSON.stringify(this.details) }
    };
    this.navController.navigateForward(['booking'], navigationExtras);
  }

}
