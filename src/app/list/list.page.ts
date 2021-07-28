import { Component, OnInit } from '@angular/core';
import { NavigationExtras } from '@angular/router';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-list',
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.scss'],
})
export class ListPage implements OnInit {

  locations = [
    { name: 'Premier Inn Munich City Schwabing hotel',
      address:'Frankfurter Ring 182, 80807 München',
      website: 'https://www.premierinn.com/',
      telephone: '+498924445050',
      position: {lat:48.187749, lng: 11.592052},
      devices: [
        { name: 'Specialized S-Works Turbo Levo', price: 65, make:'Specialized', model: 'Turbo Levo',
          description: 'Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum ' },
          { name: 'E-Mountainbike Fullsuspension', price: 55, make:'Specialized', model:'Turbo Levo', description: 'Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum ' },
          { name: 'E-Mountainbike', price: 45, make: 'Specialized', model: 'Levo Turbo', description: 'Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum ' },
      ]
    },{
      name: 'BEYOND by Geisel',
      address: 'Marienplatz 22, 80331 München',
      website: 'https://www.beyond-muc.de/de',
      telephone: '+4989700746700',
      position: {lat:48.13676277839, lng: 11.575413810912586},
      devices: [
        { name: 'Specialized S-Works Turbo Levo', price: 65, make:'Specialized', model: 'Turbo Levo',
          description: 'Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum ' },
          { name: 'E-Mountainbike Fullsuspension', price: 55, make:'Specialized', model:'Turbo Levo', description: 'Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum ' },
          { name: 'E-Mountainbike', price: 45, make: 'Specialized', model: 'Levo Turbo', description: 'Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum ' },
      ]
    },{
      name: 'FourSide Hotel München',
      address: 'Frankfurter Ring 228, 80807 München',
      website: 'https://www.fourside-hotels.com/',
      telephone: '+4989307484580',
      position: {lat :48.186326017406266, lng: 11.60748987080598},
      devices: [
        { name: 'Specialized S-Works Turbo Levo', price: 65, make:'Specialized', model: 'Turbo Levo',
          description: 'Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum ' },
          { name: 'E-Mountainbike Fullsuspension', price: 55, make:'Specialized', model:'Turbo Levo', description: 'Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum ' },
          { name: 'E-Mountainbike', price: 45, make: 'Specialized', model: 'Levo Turbo', description: 'Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum ' },
      ]
    },{
      name: 'Bold Hotel München Zentrum',
      address: 'Lindwurmstraße 70A, 80337 München',
      website: 'https://bold-hotels.com/',
      telephone: '+498974646720',
      position: {lat: 48.12652605234645, lng:11.55156506895025},

      devices: [
        { name: 'Specialized S-Works Turbo Levo', price: 65, make:'Specialized', model: 'Turbo Levo',
          description: 'Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum ' },
          { name: 'E-Mountainbike Fullsuspension', price: 55, make:'Specialized', model:'Turbo Levo', description: 'Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum ' },
          { name: 'E-Mountainbike', price: 45, make: 'Specialized', model: 'Levo Turbo', description: 'Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum ' },
      ]
    },{
      name: 'Bavaria Boutique Hotel',
      address: 'Gollierstraße 9, 80339 München',
      website: 'https://www.bavaria-boutique-hotel-muenchen.de/',
      telephone: '+49895080790',
      position: {lat:48.13585286199705, lng:11.545913611278149},
      devices: [
        { name: 'Specialized S-Works Turbo Levo', price: 65, make:'Specialized', model: 'Turbo Levo',
          description: 'Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum ' },
          { name: 'E-Mountainbike Fullsuspension', price: 55, make:'Specialized', model:'Turbo Levo', description: 'Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum ' },
          { name: 'E-Mountainbike', price: 45, make: 'Specialized', model: 'Levo Turbo', description: 'Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum ' },
      ]
    }
  ];
  constructor(public navController: NavController) { }

  ngOnInit() {
  }

  gotoDetailsPage(selectedItem){

    const params = {bike:selectedItem};
    const navigationExtras: NavigationExtras = {
      queryParams: { bikeDetails: JSON.stringify(params) }
    };
    console.log(navigationExtras);
    this.navController.navigateForward(['bike-details'], navigationExtras);
  }
}
