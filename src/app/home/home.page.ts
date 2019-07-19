import { Component } from '@angular/core';
import { WeatherService } from '../weather.service';
import { ToastrService } from 'ngx-toastr';

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
  message : string;
  showMsg : boolean = false;
 

  constructor(private service: WeatherService,  private toastr: ToastrService) {

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

    
    } ,  error => {

      this.message = 'Cant find location';
      this.toastr.success(this.message, 'try anther!',{
        disableTimeOut:false
      });
     
    });
  }






}
