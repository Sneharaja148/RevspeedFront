import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// Import the Angular Material modules after Angular's BrowserModule.
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { AppComponent } from './app.component';
import { BasicPlanComponent } from './basic-plan/basic-plan.component';
import { MaterialModule } from './material/material.module';
import { HttpClientModule } from '@angular/common/http';

import { provideHttpClient, withFetch } from '@angular/common/http';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatListModule } from '@angular/material/list';
import { i_plans } from '../../card';


@NgModule({
  declarations: [
    AppComponent,
    BasicPlanComponent
  
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule, 
    MatButtonModule,
    MatCardModule,MaterialModule,
    HttpClientModule,
    MatGridListModule,
    MatListModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }