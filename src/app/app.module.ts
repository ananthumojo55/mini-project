import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './utils/navbar/navbar.component';
import { HomeComponent } from './pages/home/home.component';

import { FooterComponent } from './utils/footer/footer.component';
import { SingleComponent } from './pages/single/single.component';
import { SignupComponent } from './pages/signup/signup.component';
import { JourneyComponent } from './pages/journey/journey.component';
import { BookticketComponent } from './pages/bookticket/bookticket.component';
import { ContactusComponent } from './pages/contactus/contactus.component';
import { PremiumtrainsComponent } from './pages/premiumtrains/premiumtrains.component';
import { TouristtrainsComponent } from './pages/touristtrains/touristtrains.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    FooterComponent,
    SingleComponent,
    SignupComponent,
    JourneyComponent,
    BookticketComponent,
    ContactusComponent,
    PremiumtrainsComponent,
    TouristtrainsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
