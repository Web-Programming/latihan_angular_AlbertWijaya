import { Injectable } from '@angular/core';
import { HousingLocation } from './housing-location';

@Injectable({
  providedIn: 'root'
})
export class HousingService {
  protected housingLocationList: HousingLocation[] =[
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
  constructor() { }

  getAllHousingLocations() :HousingLocation[]{
    return this.housingLocationList;
  }
  getHousingLocationById(id:Number):HousingLocation | undefined{
    return this.housingLocationList.find(housingLocation =>housingLocation.id == id);
  }
}
