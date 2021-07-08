import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutPageComponent } from './about-page/about-page.component';
import { EnquirePageComponent } from './enquire-page/enquire-page.component';
import { HomePageComponent } from './home-page/home-page.component';
import { ServicesListPageComponent } from './services-list-page/services-list-page.component';
import { ServicesPageComponent } from './services-page/services-page.component';

const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'about', component: AboutPageComponent },
  { path: 'services', component: ServicesPageComponent },
  { path: 'more-info', component: ServicesListPageComponent },
  { path: 'enquire', component: EnquirePageComponent },




];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
