import {Component, inject} from '@angular/core';
import {HousingLocationComponent} from '../housing-location/housing-location';
import {CommonModule, NgForOf} from '@angular/common';
import {HousingLocation} from '../housing-location';
import {HousingService} from '../housingService';

@Component({
  selector: 'app-home',
  imports: [
    HousingLocationComponent,
    CommonModule,
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

    <!-- 当 filteredLocationList 为空时显示提示 -->
    <p
      *ngIf="filteredLocationList.length === 0"
      style="
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 100%;
    text-align: center;
    font-style: italic;
    color: #666;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  ">
      No housing locations found. Try a different search term.
    </p>
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
