import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MDBBootstrapModule } from 'angular-bootstrap-md';

import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { MenuComponent } from './inc/menu/menu.component';
import { ScrollToTopComponent } from './inc/scroll-to-top/scroll-to-top.component';
import { AppRouttingModule } from './app-routting.module';
import { FormationComponent } from './formation/formation.component';
import { ExperienceComponent } from './experience/experience.component';
import { FooterComponent } from './inc/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MenuComponent,
    ScrollToTopComponent,
    FormationComponent,
    ExperienceComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MDBBootstrapModule,
    AppRouttingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
