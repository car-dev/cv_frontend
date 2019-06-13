import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { HttpClientModule } from '@angular/common/http';

import { NgModule, LOCALE_ID } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './ui/home/home.component';
import { MenuComponent } from './ui/inc/menu/menu.component';
import { ScrollToTopComponent } from './ui/inc/scroll-to-top/scroll-to-top.component';
import { AppRouttingModule } from './app-routting.module';
import { ExperiencesComponent } from './ui/experiences/experiences.component';
import { FooterComponent } from './ui/inc/footer/footer.component';
import { FormationsComponent } from './ui/formations/formations.component';
import { FormationsListComponent } from './ui/formations/formations-list/formations-list.component';
import { FormationItemComponent } from './ui/formations/formation-item/formation-item.component';
import { ExperiencesListComponent } from './ui/experiences/experiences-list/experiences-list.component';
import { ExperiencesItemComponent } from './ui/experiences/experiences-item/experiences-item.component';

import { FormationService } from './services/formation.service';


import { registerLocaleData } from '@angular/common';
import localeFr from '@angular/common/locales/fr';
import { ModulesListComponent } from './ui/formations/modules-list/modules-list.component';

registerLocaleData(localeFr, 'fr');

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    ScrollToTopComponent,
    FooterComponent,
    HomeComponent,
    FormationsComponent,
    FormationsListComponent,
    FormationItemComponent,
    ExperiencesComponent,
    ExperiencesListComponent,
    ExperiencesItemComponent,
    ModulesListComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MDBBootstrapModule,
    AppRouttingModule,
    HttpClientModule,
  ],
  providers: [
    FormationService,
    {provide: LOCALE_ID, useValue: "fr" }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
