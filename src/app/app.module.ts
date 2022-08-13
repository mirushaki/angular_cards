import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
// import { CollectionsModule } from './collections/collections.module';
// import { ElementsModule } from './elements/elements.module';
// import { ModsModule } from './mods/mods.module';
// import { ViewsModule } from './views/views.module';
// import { WeatherBulmaModule } from './weather-bulma/weather-bulma.module';
// import { WeatherModule } from './weather/weather.module';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NotFoundComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    // ElementsModule,
    // CollectionsModule,    
    // ViewsModule,
    // ModsModule,
    // WeatherBulmaModule,
    // WeatherModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
