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
      <input type="text" placeholder="Filter by city" #filter>
      <button class="primary" type="button" (click)="filterResults(filter.value)">Search</button>
    </section>
    <section class="results">
      <app-housing-location *ngFor="let housingLocation of filteredLocationList" [housingLocation]="housingLocation">

      </app-housing-location>
    </section>
  `,
  styleUrl: './home.css'
})
export class HomeComponent {
  readonly baseUrl = "https://angular.dev/assets/images/tutorials/common";
  housingLocationList: HousingLocation[] = [];
  housingService: HousingService = inject(HousingService);
  filteredLocationList: HousingLocation[] = [];

  constructor() {
    this.housingService.getAllHousingLocations().then((housingLocationList) => {
      this.housingLocationList = housingLocationList;
      this.filteredLocationList = housingLocationList;
    });
  }

  filterResults(value: string) {
    if (!value) this.filteredLocationList = this.housingLocationList

    this.filteredLocationList = this.filteredLocationList.filter(
      (housingLocation) => housingLocation.city.toLowerCase().includes(value.toLowerCase())
    );
  }
}
