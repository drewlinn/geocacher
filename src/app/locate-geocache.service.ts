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
    return this.http.get('https://maps.googleapis.com/maps/api/geocode/json?latlng=' +latitude+ ',' +longitude+ '&key=' +geoKey)
  }

  findGeocacheByAddress(address: string) {
    return this.http.get('https://maps.googleapis.com/maps/api/geocode/json?address=' +address+ '&key=' +geoKey)
  }
}
