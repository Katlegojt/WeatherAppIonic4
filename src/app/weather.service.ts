import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {


  city: string = 'pretoria';
  appId = '1f31d8a9da3b757eb996cfd7e84b8a84';
  //

  constructor(private http: HttpClient) { }
// http request
  getWeatherData(city: string) {
    return this.http.get('http://api.openweathermap.org/data/2.5/forecast?q=' + city + '&units=metric&APPID=' + this.appId);

  }



}
