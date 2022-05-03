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
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule,
    NgxEchartsModule.forRoot({
      echarts: () => import('echarts'),
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
