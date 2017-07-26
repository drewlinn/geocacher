import { Component, OnInit } from '@angular/core';
import { LocateGeocacheService } from '../locate-geocache.service';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-geocache-form',
  templateUrl: './geocache-form.component.html',
  styleUrls: ['./geocache-form.component.css'],
  providers: [ LocateGeocacheService ]
})
export class GeocacheFormComponent implements OnInit {

  constructor(private locateGeocache: LocateGeocacheService) { }

  ngOnInit() {
  }
  getGeocacheByLatLon(latitude: string, longitude: string) {
    this.locateGeocache.findGeocacheByLatLon(latitude, longitude);
  }
  getGeocacheByAddress(address: string) {
    this.locateGeocache.findGeocacheByAddress(address);
  }

}
