import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Router, RouterModule, Routes } from '@angular/router';
import {HttpClientModule} from '@angular/common/http';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ReviewComponent } from './review/review.component';

import { VacancyInfoComponent } from './vacancy-info/vacancy-info.component';
import { VisualComponent } from './visual/visual.component';


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
