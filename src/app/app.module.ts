import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxPageScrollCoreModule } from 'ngx-page-scroll-core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from 'src/shared/navbar/navbar.component';
import { AboutComponent } from './about/about.component';
import { FormationComponent } from './formation/formation.component';
import { ContactComponent } from './contact/contact.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    AboutComponent,
    FormationComponent,
    ContactComponent,
  ],
  imports: [
    BrowserModule,
    NgxPageScrollCoreModule.forRoot(),
    AppRoutingModule
  ],
  providers: [],
  schemas:[
    CUSTOM_ELEMENTS_SCHEMA,
    NO_ERRORS_SCHEMA
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
