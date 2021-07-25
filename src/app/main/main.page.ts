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
    { name: 'Standort 1', address: 'Musterstr. 123, 12345 Musterhausen', devicesCount:3, devices: [
        { name: 'Harley-Davidson', price: 6500, make:'Harley & Davidson', model: '2021 Sports',
        description: 'The pursuit of adventure begins with a ride on a Harley-Davidson® motorcycle. Make any weekend epic. Turn your commute into a daily thrill-seeker. A Harley-Davidson® blows things wide open. Pure freedom. As big and real as it gets.' },
        { name: 'E-Mountainbike Fullsuspension', price: 5500 },
        { name: 'E-Mountainbike', price: 4500 },
      ]
  },
    { name: 'Standort 2', address: 'Beispielstr. 321, 54321 Musterstadt', devicesCount:5,  devices: [
      { name: 'Specialized S-Works Turbo Levo', price: 6500 },
      { name: 'E-Mountainbike Fullsuspension', price: 5500 },
      { name: 'E-Mountainbike', price: 4500 },
      { name: 'E-Trekking', price: 3500 },
      { name: 'E-Citybike', price: 2500 }
    ] },
    { name: 'Standort 3', address: 'Musterweg 1, 98765 Beispielstadt', devicesCount:4,  devices: [
      { name: 'Specialized S-Works Turbo Levo', price: 6500 },
      { name: 'E-Mountainbike Fullsuspension', price: 5500 },
      { name: 'E-Trekking', price: 3500 },
      { name: 'E-Citybike', price: 2500 }
    ] }
  ];

  constructor(private navController: NavController) { }

  ngOnInit() {
  }

  gotoDetailsPage(selectedItem){

    const navigationExtras: NavigationExtras = {
      queryParams: { bikeDetails: JSON.stringify(selectedItem) }
    };
    this.navController.navigateForward(['bike-details'], navigationExtras);
  }
}
