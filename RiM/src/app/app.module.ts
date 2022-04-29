import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Router, RouterModule, Routes } from '@angular/router';
import {HttpClientModule} from '@angular/common/http';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ReviewComponent } from './review/review.component';

import { VacancyInfoComponent } from './vacancy-info/vacancy-info.component';


const appRoutes: Routes = [
  {path: 'review', component: ReviewComponent},
]

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ReviewComponent,
    VacancyInfoComponent,

  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
