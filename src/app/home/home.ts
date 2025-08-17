import {Component, inject} from '@angular/core';
import {HousingLocationComponent} from '../housing-location/housing-location';
import {NgForOf} from '@angular/common';
import {HousingLocation} from '../housing-location';
import {HousingService} from '../housingService';

@Component({
  selector: 'app-home',
  imports: [
    HousingLocationComponent,
    NgForOf
  ],
  template: `
    <!-- <p> -->
    <!--   home works! -->
    <!-- </p> -->
    <section>
      <input type="text" placeholder="Filter by city">
      <button class="primary" type="button">Search</button>
    </section>
    <section class="results">
      <app-housing-location *ngFor="let housingLocation of housingLocationList" [housingLocation]="housingLocation">

      </app-housing-location>
    </section>
  `,
  styleUrl: './home.css'
})
export class HomeComponent {
  readonly baseUrl = "https://angular.dev/assets/images/tutorials/common";
  housingLocationList: HousingLocation[] = [];
  housingService: HousingService = inject(HousingService);

  constructor() {
    this.housingLocationList = this.housingService.getAllHousingLocations();
  }
}

export class Home {
}
