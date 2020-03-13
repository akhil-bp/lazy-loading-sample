import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from '../dashboard/dashboard.component'
import { HomeComponent } from './home/home.component';
import { Home1Component } from './home1/home1.component';
import { Home2Component } from './home2/home2.component';
import { Home3Component } from './home3/home3.component';
const routes: Routes = [
  {
    path: '', component: DashboardComponent,
    children: [
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: 'home', component: HomeComponent },
      { path: 'home1', component: Home1Component },
      { path: 'home2', component: Home2Component },
      { path: 'home3', component: Home3Component }


    ]
  }
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
    entryComponents: [HomeComponent]
  })
export class DashboardRoutingModule { }
