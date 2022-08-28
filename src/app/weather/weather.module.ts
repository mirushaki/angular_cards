import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WeatherHomeComponent } from './weather-home/weather-home.component';
import { CelsiusToFahrenheitPipe } from './pipes/celsius-to-fahrenheit.pipe';
import { WeatherRoutingModule } from './weather-routing.module';


@NgModule({
  declarations: [
    WeatherHomeComponent,
    CelsiusToFahrenheitPipe
  ],
  imports: [
    CommonModule,
    WeatherRoutingModule
  ],
  exports: [WeatherHomeComponent]
})
export class WeatherModule { }
