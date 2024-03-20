import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TrafficSingnalComponent } from './traffic-singnal/traffic-singnal.component';
import { DemoTrafficComponent } from './demo-traffic/demo-traffic.component';

@NgModule({
  declarations: [
    AppComponent,
    TrafficSingnalComponent,
    DemoTrafficComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
