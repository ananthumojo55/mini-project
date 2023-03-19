import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookticketComponent } from './pages/bookticket/bookticket.component';
import { ContactusComponent } from './pages/contactus/contactus.component';
import { GalleryComponent } from './pages/gallery/gallery.component';
import { HomeComponent } from './pages/home/home.component';
import { JourneyComponent } from './pages/journey/journey.component';
import { LoginComponent } from './pages/login/login.component';
import { PremiumtrainsComponent } from './pages/premiumtrains/premiumtrains.component';
import { SignupComponent } from './pages/signup/signup.component';
import { SingleComponent } from './pages/single/single.component';
import { TouristtrainsComponent } from './pages/touristtrains/touristtrains.component';
import { TrainlistComponent } from './pages/trainlist/trainlist.component';

const routes: Routes = [
  {
    path:'',component:HomeComponent
  },
  {
    path:'single',component:SingleComponent
  },
  {
    path:'journey',component:JourneyComponent
  },
  {
    path:'bookticket',component:BookticketComponent
  },
  {
    path:'signup',component:SignupComponent
  },
  
  {
    path:'premiumtrains',component:PremiumtrainsComponent
  },
  {
    path:'contactus',component:ContactusComponent
  },
  {
    path:'touristtrains',component:TouristtrainsComponent
  },
  {
    path:'trainlist',component:TrainlistComponent
  },
  {
    path:'gallery',component:GalleryComponent
  },
  {
    path:'login',component:LoginComponent
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
