import { Component } from '@angular/core';
import { WeatherService } from '../weather.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
// local variables
  city = 'pretoria';
  date: number = Date.now();
  wdate; 
  values;
  weatherData: any;
  cityData: any;
  name : string;
 

  constructor(private service: WeatherService) {

    // data from http request
    this.service.getWeatherData(this.city).subscribe(data => {
      this.values = data;
      this.weatherData = this.values.list;
      this.cityData = this.values.city;
      this.name = this.cityData.name;
      console.log(data);
    
    });

  }

// search method
  searchData() {
    this.service.getWeatherData(this.city).subscribe(data => {
      this.values = data;
      this.weatherData = this.values.list;
      this.cityData = this.values.city;
      this.name = this.cityData.name;
      console.log(data);

    
    });
  }






}
