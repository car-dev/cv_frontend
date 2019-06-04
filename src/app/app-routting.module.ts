import { NgModule } from '@angular/core';
import { RouterModule, Routes }  from '@angular/router';
import { CommonModule } from '@angular/common';

import { HomeComponent } from './views/home/home.component'
import { ExperiencesComponent } from './views/experiences/experiences.component'
import { FormationsComponent } from './views/formations/formations.component'

const appRoutes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'formation', component: FormationsComponent },
  { path: 'experience', component: ExperiencesComponent },
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
