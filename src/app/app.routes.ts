import {Routes} from '@angular/router';
import {HomeComponent} from './home/home';
import {DetailsComponent} from './details/details';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    title: 'HomePage',/*网页标题*/
  },
  {
    path: 'details/:id',
    component: DetailsComponent,
    title: 'DetailsPage',
  }
];
