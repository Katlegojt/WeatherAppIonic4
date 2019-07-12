import { Component } from '@angular/core';
import { WeatherService } from '../weather.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  city = 'pretoria';


  values: any;
  weatherData: any;
  cityData: any;
  name : string;
  


  constructor(private service: WeatherService) {

    this.service.getWeatherData(this.city).subscribe(data => {

      this.values = data;
      this.weatherData = this.values.list;
      this.cityData = this.values.city;
      this.name = this.cityData.name;

      console.log(data);

    });




  }


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
