import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BarGraphComponent } from './components/bar-graph/bar-graph.component';
import {ChartsModule} from 'ng2-charts';
import {HttpClientModule} from '@angular/common/http';
import { BarPieComponent } from './components/bar-pie/bar-pie.component';
import { BarDonutComponent } from './components/bar-donut/bar-donut.component';

@NgModule({
  declarations: [
    AppComponent,
    BarGraphComponent,
    BarPieComponent,
    BarDonutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ChartsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
