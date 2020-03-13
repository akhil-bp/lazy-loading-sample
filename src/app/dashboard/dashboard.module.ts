import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './dashboard.component';
import { Home1Component } from './home1/home1.component';
import { Home2Component } from './home2/home2.component';
import { Home3Component } from './home3/home3.component';


@NgModule({
  declarations: [HomeComponent, DashboardComponent, Home1Component, Home2Component, Home3Component],
  imports: [
    CommonModule,
    DashboardRoutingModule
  ]
})
export class DashboardModule { }
