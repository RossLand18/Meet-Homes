import {Component, inject} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {HousingService} from '../housingService';
import {HousingLocation} from '../housing-location';

@Component({
  selector: 'app-details',
  imports: [],
  template: `
    <!-- <p> -->
    <!--   details works {{ housingLocation?.id }}! -->
    <!-- </p> -->
    <article>
      <img class="listing-photo" src="{{ housingLocation?.photo }}" alt="Exterior photo of {{ housingLocation?.name }}">
      <section class="listing-description">
        <h2 class="listing-heading">{{ housingLocation?.name }}</h2>
        <p class="listing-location">{{ housingLocation?.city }}, {{ housingLocation?.state }}</p>
      </section>
      <section class="listing-features">
        <h2 class="section-heading">About this housing location</h2>
        <ul>
          <li>Available units: {{ housingLocation?.availableUnits }}</li>
          <li>Wifi: {{ housingLocation?.wifi }}</li>
          <li>Laundry: {{ housingLocation?.laundry }}</li>
        </ul>
      </section>
      <section class="listing-apply">
        <h2 class="section-heading">Apply now to live here</h2>
        <button class="primary" type="button">Apply now!</button>
      </section>
    </article>
  `,
  styleUrl: './details.css'
})
export class DetailsComponent {
  router: ActivatedRoute = inject(ActivatedRoute);
  housingService: HousingService = inject(HousingService);
  housingLocation: HousingLocation | undefined;

  constructor() {
    const housingLocationId = Number(this.router.snapshot.params['id']);
    this.housingLocation = this.housingService.getHousingLocationById(housingLocationId);
  }

}
