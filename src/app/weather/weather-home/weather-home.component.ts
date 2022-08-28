import { Component, OnInit } from '@angular/core';
import { CelsiusToFahrenheitPipe } from '../pipes/celsius-to-fahrenheit.pipe';

@Component({
  selector: 'app-weather-home',
  templateUrl: './weather-home.component.html',
  styleUrls: ['./weather-home.component.css']
})
export class WeatherHomeComponent implements OnInit {

  celsius: string = '';
  fahrenheit: string = '';

  constructor() { }

  ngOnInit(): void {
  }

  setCelsiusValue(value: string) {
    this.celsius = value;
  }

  convertToFahrenheit() {
    let cToF = new CelsiusToFahrenheitPipe();
    this.fahrenheit = cToF.transform(this.celsius)
  }
    
  clear() {
    let celsiusField = document.getElementById('celsius');
    (<HTMLInputElement> celsiusField).value = "";

    this.fahrenheit = '';
  }
}
