import {Component, Input} from '@angular/core';
import {HousingLocation} from '../housing-location';
import {CommonModule} from '@angular/common';

@Component({
  selector: 'app-housing-location',
  imports: [CommonModule],
  template: `
    <section class="listing">
      <!-- src放入[]中代表 -->
      <img class="listing-photo" [src]="housingLocation.photo" alt="Exterior photo of the {{housingLocation.name}}">
      <h2 class="listing-heading">{{ housingLocation.name }}</h2>
      <p class="listing-location">{{ housingLocation.city }}, {{ housingLocation.state }}</p>
    </section>
  `,
  styleUrl: './housing-location.css'
})
export class HousingLocationComponent {
  @Input() housingLocation!: HousingLocation;
}

