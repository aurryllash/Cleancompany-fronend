import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ServicesComponent } from './services/services.component';
import { ContactComponent } from './contact/contact.component';
import { WildCardComponent } from './wild-card/wild-card.component';
import { MoveOutComponent } from './move-out/move-out.component';
import { WindowCleaningComponent } from './window-cleaning/window-cleaning.component';
import { HomeCleaningComponent } from './home-cleaning/home-cleaning.component';
import { PropertyViewingComponent } from './property-viewing/property-viewing.component';
import { DeepCleaningComponent } from './deep-cleaning/deep-cleaning.component';
import { PrivateComponent } from './private/private.component';
import { DisinfectionCompaniesComponent } from './disinfection-companies/disinfection-companies.component';
import { MoveOutCompaniesComponent } from './move-out-companies/move-out-companies.component';
import { CompaniesConstructionComponent } from './companies-construction/companies-construction.component';

const routes: Routes = [
  {path:'', component:HomeComponent},
  {path:'about-us', component:AboutUsComponent},
  { path: 'services/private', component: PrivateComponent },
  {path:'contact', component:ContactComponent},
  {path:'services/move-out-cleaning', component:MoveOutComponent},
  {path:'services/window-cleaning', component:WindowCleaningComponent},
  {path:'services/home-cleaning', component:HomeCleaningComponent},
  {path:'services/basic-property-viewing', component:PropertyViewingComponent},
  {path:'services/deep-cleaning', component:DeepCleaningComponent},
  {path:'services/companies', component:PrivateComponent},
  {path:'services/companies/disinfection', component:DisinfectionCompaniesComponent},
  {path:'services/companies/move-out-cleaning', component:MoveOutCompaniesComponent},
  {path:'services/companies/prices', component:CompaniesConstructionComponent},


  {path:'**', component:WildCardComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
