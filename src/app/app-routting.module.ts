import { NgModule } from '@angular/core';
import { RouterModule, Routes }  from '@angular/router';
import { CommonModule } from '@angular/common';

import { HomeComponent } from './home/home.component'
import { ExperienceComponent } from './experience/experience.component'
import { FormationComponent } from './formation/formation.component'

const appRoutes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'formation', component: FormationComponent },
  { path: 'experience', component: ExperienceComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full'},
  { path: '**', redirectTo: '/home',  },
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(
      appRoutes,
     )
  ],
  exports: [
    RouterModule,
  ],
  declarations: []
})
export class AppRouttingModule { }
