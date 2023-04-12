import { Component } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-forecast',
  templateUrl: './forecast.component.html',
  styleUrls: ['./forecast.component.scss']
})
export class ForecastComponent {
  weatherDetails: any;
  cityName: any;
  CountryName: any;
  Temp: any;
  TempMin: any;
  TempMax: any;
  Pressure: any;
  humidity: any;
  speed: any;
  city_Name: any;

  constructor(private dataService: DataService) { }


  weatherData() {
    console.log(this.city_Name, "data");
    this.dataService.getWeatherData(this.city_Name).subscribe((respara: any) => {
      this.weatherDetails = respara
      console.log(this.weatherDetails, 'weatherDetails');

      this.cityName = this.weatherDetails.name;
      this.CountryName = this.weatherDetails.sys.country
      this.Temp = this.weatherDetails.main.temp
      this.TempMax = this.weatherDetails.main.temp_max
      this.TempMin = this.weatherDetails.main.temp_min
      this.Pressure = this.weatherDetails.main.pressure
      this.humidity = this.weatherDetails.main.humidity
      this.speed = this.weatherDetails.wind.speed



    })



  }
}

