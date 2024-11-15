import { Component,inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { HousingService } from '../housing.service';
import { HousingLocation } from '../housing-location';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [CommonModule],
  template: `
    <p>
      details works {{housingLocationId}}
    </p>
  `,
  styleUrl: './details.component.css'
})
export class DetailsComponent {
  route : ActivatedRoute = inject(ActivatedRoute);
  housingLocationId = 0;
  housingService : HousingService = inject(HousingService);
  housinglocation : HousingLocation|undefined

  constructor(){
    this.housingLocationId = Number(this.route.snapshot.params['id']);
    this.housinglocation = this.housingService.getHousingLocationById(this.housingLocationId);
    console.table(this.housinglocation);
  }
}
