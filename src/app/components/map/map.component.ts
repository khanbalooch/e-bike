import { Component, Input, NgZone, OnInit, ViewChild } from '@angular/core';
import { MapInfoWindow, GoogleMap, MapMarker } from "@angular/google-maps";
import { NavigationExtras, Router } from '@angular/router';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss'],
})
export class MapComponent implements OnInit {

  @Input() locations;
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

  infoContent = "";
  infoWindowIds = [];
  constructor(public navController: NavController, public router: Router, public ngZone: NgZone) { }

  ngOnInit() {}

  openInfoWindow(marker: MapMarker, location: any) {
    let bikeDetails= {
      location: {
        name: location.name,
        address: location.address
      },
      bike: null
    }
    this.infoWindowIds = [];
    this.infoContent = '<h2>' + location.name + '</h2>';

    let i = 1;
    location.devices.forEach(device => {
      let itemid = 'item' + i.toString();
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
    this.ngZone.run(() => {
      this.router.navigateByUrl('/bike-details');
    });
    
    // this.navController.navigateForward(['bike-details'], navigationExtras);
  }
}
