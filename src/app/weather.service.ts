import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  

  city = 'pretoria';
 

  constructor(private http: HttpClient ) { }

  getWeatherData( city: string ){

return this.http.get('http://api.openweathermap.org/data/2.5/forecast?q=' + city + '&APPID=' + this.appId);

  }



}
