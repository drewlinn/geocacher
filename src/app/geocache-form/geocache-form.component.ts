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
  resultGeocache: Geocache = null;
  noResult: boolean = false;
  constructor(private locateGeocache: LocateGeocacheService) { }

  ngOnInit() {
  }
  getGeocacheByLatLon(latitude: string, longitude: string) {
    this.noResult = false;
    this.locateGeocache.findGeocacheByLatLon(latitude, longitude)
    this.resultGeocache = this.locateGeocache.getResult();
    if (this.resultGeocache != null) {
      this.noResult = true;
    }
  }
  getGeocacheByAddress(address: string) {
    this.noResult = false;
    this.locateGeocache.findGeocacheByAddress(address);
    this.resultGeocache = this.locateGeocache.getResult();
    if (this.resultGeocache != null) {
      this.noResult = true;
    }
  }

}
