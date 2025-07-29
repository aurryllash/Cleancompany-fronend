import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HttpClient } from '@angular/common/http'; 

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ServicesComponent } from './services/services.component';
import { ContactComponent } from './contact/contact.component';
import { WildCardComponent } from './wild-card/wild-card.component';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { MoveOutComponent } from './move-out/move-out.component';
import { WindowCleaningComponent } from './window-cleaning/window-cleaning.component';
import { HomeCleaningComponent } from './home-cleaning/home-cleaning.component';
import { PropertyViewingComponent } from './property-viewing/property-viewing.component';
import { DeepCleaningComponent } from './deep-cleaning/deep-cleaning.component';
import { PrivateComponent } from './private/private.component';
import { MoveOutCompaniesComponent } from './move-out-companies/move-out-companies.component';
import { DisinfectionCompaniesComponent } from './disinfection-companies/disinfection-companies.component';
import { CompaniesConstructionComponent } from './companies-construction/companies-construction.component';

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    AboutUsComponent,
    ServicesComponent,
    ContactComponent,
    WildCardComponent,
    MoveOutComponent,
    WindowCleaningComponent,
    HomeCleaningComponent,
    PropertyViewingComponent,
    DeepCleaningComponent,
    PrivateComponent,
    MoveOutCompaniesComponent,
    DisinfectionCompaniesComponent,
    CompaniesConstructionComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    TranslateModule.forRoot({
      defaultLanguage: 'en',
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }