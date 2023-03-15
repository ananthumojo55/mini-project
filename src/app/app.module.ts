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
import { TrainlistComponent } from './pages/trainlist/trainlist.component';

import { GalleryComponent } from './pages/gallery/gallery.component';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideAuth,getAuth } from '@angular/fire/auth';
import { provideDatabase,getDatabase } from '@angular/fire/database';
import { provideFirestore,getFirestore } from '@angular/fire/firestore';

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
    TouristtrainsComponent,
    TrainlistComponent,
    GalleryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => getAuth()),
    provideDatabase(() => getDatabase()),
    provideFirestore(() => getFirestore())
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
