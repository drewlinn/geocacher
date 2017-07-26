import { Component, OnInit } from '@angular/core';
import { LocateGeocacheService } from '../locate-geocache.service';
import { Observable } from 'rxjs/Observable';
import { Geocache } from '../geocache.model';

@Component({
  selector: 'app-geocache-form',
  templateUrl: './geocache-form.component.html',
  styleUrls: ['./geocache-form.component.css'],
  providers: [ LocateGeocacheService ]
})
export class GeocacheFormComponent implements OnInit {
  foundGeocache: Geocache = null;
  noResult: boolean = false;
  constructor(private locateGeocache: LocateGeocacheService) { }

  ngOnInit() {
  }

  getGeocacheByLatLon(latitude: string, longitude: string) {
    this.noResult = false;
    this.locateGeocache.findGeocacheByLatLon(latitude, longitude).subscribe(response => {
      for(let result of response.json().results) {
        this.foundGeocache = new Geocache(result.formatted_address, latitude, longitude, result.geometry.location_type);
        if (this.foundGeocache === null) {
          this.noResult = true;
        }
      }
    });
  }

  getGeocacheByAddress(address: string) {
    this.noResult = false;
    this.locateGeocache.findGeocacheByAddress(address).subscribe(response => {
      for(let result of response.json().results) {
        this.foundGeocache = new Geocache(address, result.geometry.location.lat, result.geometry.location.lng, result.geometry.location_type);
        if (this.foundGeocache === null) {
          this.noResult = true;
        }
      }
    });
  }

}
