import { Component } from '@angular/core';
import { PlacesService } from '../../services';

@Component({
  selector: 'app-map-page',
  templateUrl: './map-page.component.html',
  styleUrls: ['./map-page.component.scss'],
})
export class MapPageComponent {
  constructor(private placesServices: PlacesService) {}

  get isUserLocationReady() {
    return this.placesServices.isUserLocationReady;
  }
}
