import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CtFPipe } from './ct-f.pipe';
import { CollectionsModule } from './collections/collections.module';
import { ElementsModule } from './elements/elements.module';

@NgModule({
  declarations: [
    AppComponent,
    CtFPipe
  ],
  imports: [
    BrowserModule,
    CollectionsModule,
    ElementsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
