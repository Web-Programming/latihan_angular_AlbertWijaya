import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HousingLocationComponent } from '../housing-location/housing-location.component';
import { HousingLocation } from '../housing-location';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule,HousingLocationComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
    housingLocationList:HousingLocation[] = [
      {
        id    : 0,
      name  : "Citra Grand City",
      city  : "Palembang",
      state : "ID",
      photo         : "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Gerbang_CitraGrand_City_Palembang.jpg/640px-Gerbang_CitraGrand_City_Palembang.jpg",
      availableUnit :12,
      wifi          :true,
      laundry       :true,
      }
    ]
  }
