import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { GoogleMap, MapInfoWindow, MapMarker } from '@angular/google-maps';

@Component({
  selector: 'app-maps',
  templateUrl: './maps.page.html',
  styleUrls: ['./maps.page.scss'],
})
export class MapsPage implements OnInit {

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
  @ViewChild(GoogleMap, { static: false }) map: GoogleMap;
  @ViewChild(MapInfoWindow, { static: false }) infoWindow: MapInfoWindow;

  zoom = 12;
  center: google.maps.LatLngLiteral = {
    lat: 49.444939,
    lng: 11.080157
  };
  options: google.maps.MapOptions = {
    zoomControl: false,
    clickableIcons: true,
    fullscreenControl: false,
    mapTypeControl: false,
    scrollwheel: true,
    disableDoubleClickZoom: true,
    maxZoom: 18,
    minZoom: 8
  };
  markerOptions: google.maps.MarkerOptions = {
    animation: google.maps.Animation.DROP,
    crossOnDrag: true
  };

  infoContent = '';
  infoWindowIds = [];
  constructor() { }

  ngOnInit() {}

  openInfoWindow(marker: MapMarker, location: any) {
    this.infoWindowIds = [];
    this.infoContent = '<h2>' + location.name + '</h2>';

    let i = 1;
    location.devices.forEach(device => {
      const itemid = 'item' + i.toString();
      console.log(itemid);
      this.infoContent += '<a id="'+ itemid + '" class="'+ itemid + '">' + device.name + '</a>';
      this.infoWindowIds.push(itemid);
      i++;
    });
    this.infoWindow.open(marker);
  }

  domReady(){
    this.infoWindowIds.forEach(id => {
      console.log(id);
      document.getElementsByClassName(id)[0].addEventListener('click', this.gotoDetailsPage);
    });
  }

  gotoDetailsPage(){
    // let selectedItem = {};
    // const navigationExtras: NavigationExtras = {
    //   queryParams: { bikeDetails: JSON.stringify(selectedItem) }
    // };
    // console.log(navigationExtras);
    // this.navController.navigateForward(['bike-details'], navigationExtras);
  }

}
