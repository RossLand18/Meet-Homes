import {Component, inject} from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-details',
  imports: [],
  template: `
    <p>
      details works {{ housingLocationId }}!
    </p>
  `,
  styleUrl: './details.css'
})
export class DetailsComponent {
  router: ActivatedRoute = inject(ActivatedRoute);
  housingLocationId = 0;

  constructor() {
    this.housingLocationId = Number(this.router.snapshot.params['id']);
  }

}
