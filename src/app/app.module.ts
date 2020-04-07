import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import * as fromComponents from './components';
import * as fromContainers from './containers';
import * as fromServices from './services';

@NgModule({
  declarations: [
    AppComponent,
    fromContainers.containers,
    fromComponents.components
  ],
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule,
    AppRoutingModule
  ],
  providers: [
    fromServices.services
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
