import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes , RouterModule } from '@angular/router';
import {NgbPaginationModule, NgbAlertModule} from '@ng-bootstrap/ng-bootstrap';
import {FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { DetailsComponent } from './details/details.component';
import { HomeComponent } from './home/home.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

const ROUTES: Routes =[
  { path: "", component: HomeComponent},
  { path: 'details', component:DetailsComponent},
]

@NgModule({
  declarations: [
    AppComponent,
    DetailsComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(ROUTES),
    NgbModule,
    NgbPaginationModule, NgbAlertModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
