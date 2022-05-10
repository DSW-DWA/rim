import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Router, RouterModule, Routes } from '@angular/router';
import {HttpClientModule} from '@angular/common/http';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ReviewComponent } from './review/review.component';

import { VacancyInfoComponent } from './vacancy-info/vacancy-info.component';
import { VisualComponent } from './visual/visual.component';
import { NgxEchartsModule } from 'ngx-echarts';
import { ChartCircleComponent } from './chart-circle/chart-circle.component';
import { ChartBarFirstComponent } from './chart-bar-first/chart-bar-first.component';
import { ChartLineComponent } from './chart-line/chart-line.component';
import { ChartMapComponent } from './chart-map/chart-map.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


const appRoutes: Routes = [
  {path: 'review', component: ReviewComponent},
  {path: 'visual', component: VisualComponent},
]

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ReviewComponent,
    VacancyInfoComponent,
    VisualComponent,
    ChartCircleComponent,
    ChartBarFirstComponent,
    ChartLineComponent,
    ChartMapComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule,
    NgxEchartsModule.forRoot({
      echarts: () => import('echarts'),
    }),
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
