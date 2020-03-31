import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import * as fromComponents from './components';
import * as fromContainers from './containers';

@NgModule({
  declarations: [
    AppComponent,
    fromContainers.containers,
    fromComponents.components
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
