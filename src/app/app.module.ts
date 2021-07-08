import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { ServicesPageComponent } from './services-page/services-page.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ServicesListPageComponent } from './services-list-page/services-list-page.component';
import { EnquirePageComponent } from './enquire-page/enquire-page.component';
import { FooterComponent } from './footer/footer.component';
import { AboutPageComponent } from './about-page/about-page.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    ServicesPageComponent,
    NavbarComponent,
    ServicesListPageComponent,
    EnquirePageComponent,
    FooterComponent,
    AboutPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
