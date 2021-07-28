import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-main',
  templateUrl: './main.page.html',
  styleUrls: ['./main.page.scss'],
})
export class MainPage implements OnInit {

  mapView = true;
  formattedAddress: string;
  locations = [
    { name: 'Standort 1', address: 'Musterstr. 123, 12345 Musterhausen', devicesCount:3,  position: { lat:49.485994, lng:11.025225}, devices: [
        { name: 'Specialized S-Works Turbo Levo', price: 65, make:'Specialized', model: 'Turbo Levo',
        description: 'Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum ' },
        { name: 'E-Mountainbike Fullsuspension', price: 55, make:'Specialized', model:'Turbo Levo', description: 'Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum ' },
        { name: 'E-Mountainbike', price: 45, make: 'Specialized', model: 'Levo Turbo', description: 'Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum ' },
      ]
  },
    { name: 'Standort 2', address: 'Beispielstr. 321, 54321 Musterstadt', devicesCount:3, position: { lat:49.449849, lng:11.126849},  devices: [
      { name: 'Specialized S-Works Turbo Levo', price: 65, make:'Specialized', model: 'Turbo Levo',
        description: 'Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum ' },
        { name: 'E-Mountainbike Fullsuspension', price: 55, make:'Specialized', model:'Turbo Levo', description: 'Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum ' },
        { name: 'E-Mountainbike', price: 45, make: 'Specialized', model: 'Levo Turbo', description: 'Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum ' },
    ] },
    { name: 'Standort 3', address: 'Musterweg 1, 98765 Beispielstadt', devicesCount:3, position: { lat:49.401168, lng:11.083590},  devices: [
      { name: 'Specialized S-Works Turbo Levo', price: 65, make:'Specialized', model: 'Turbo Levo',
        description: 'Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum ' },
        { name: 'E-Mountainbike Fullsuspension', price: 55, make:'Specialized', model:'Turbo Levo', description: 'Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum ' },
        { name: 'E-Mountainbike', price: 45, make: 'Specialized', model: 'Levo Turbo', description: 'Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum ' },
    ] }
  ];

  constructor(private navController: NavController) { }

  ngOnInit() {
  }

  // gotoDetailsPage(selectedItem){

  //   const params = {bike:selectedItem};
  //   const navigationExtras: NavigationExtras = {
  //     queryParams: { bikeDetails: JSON.stringify(params) }
  //   };
  //   console.log(navigationExtras);
  //   this.navController.navigateForward(['bike-details'], navigationExtras);
  // }
}
