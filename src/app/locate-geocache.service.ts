import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { geoKey } from './api-Keys';
import { Observable } from 'rxjs/Observable';
import { Geocache } from './geocache.model';

@Injectable()
export class LocateGeocacheService {
  foundGeocache: Geocache;
  constructor(private http: Http) { }

  findGeocacheByLatLon(latitude: string, longitude: string) {
    return this.http.get('https://maps.googleapis.com/maps/api/geocode/json?latlng=' +latitude+ ',' +longitude+ '&key=' +geoKey).subscribe(response => {
      let foundGeocache: Geocache;
      for(let result of response.json().results) {
        foundGeocache = new Geocache(result.formatted_address, latitude, longitude, result.geometry.location_type);
        this.getResult();
        console.log(foundGeocache);
      }
    });
  }

  findGeocacheByAddress(address: string) {
    return this.http.get('https://maps.googleapis.com/maps/api/geocode/json?address=' +address+ '&key=' +geoKey).subscribe(response => {
      let foundGeocache: Geocache;
      for(let result of response.json().results) {
        foundGeocache = new Geocache(address, result.geometry.location.lat, result.geometry.location.lng, result.geometry.location_type);
        this.getResult();
        console.log(foundGeocache);
      }
    });
  }

  getResult() {
    return this.foundGeocache;
  }
}
