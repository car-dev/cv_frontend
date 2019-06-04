import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Subject } from 'rxjs';

import { AppSettings } from 'src/app/app.settings';
import { Formation } from 'src/app/models/Formation';

@Injectable({
  providedIn: 'root'
})

export class FormationService {

  formationSubject = new Subject<Formation[]>();
  
  private formations: Formation[] ;

  constructor(
    private httpClient: HttpClient
    ) { 
    }

  emitFormations() {
    this.formationSubject.next(this.formations.slice());
  }
  
  getFormations() {
    this.httpClient.get<Formation[]>(AppSettings.API_FORMATION)
    .subscribe(
      (response) => {
        this.formations = response;
        this.emitFormations();
        console.log('Liste des Formations chargée.')
      },
      (error) => {
        console.log('Erreur de récupération de la liste des formations  : ' + JSON.stringify(error));
      }
    );
  }
 

  addFormation(formation: Formation) {
    // this.formations.push(formation);
    // this.emitFormations();
    this.httpClient
      .post(AppSettings.API_FORMATION, formation)
      .subscribe(
        () => {
          console.log('Formation enregistrée !');
          this.emitFormations();
        },
        (error) => {
          console.log('Erreur d\'enregistrement de la formation  : ' + error.toString());
        }
      );
    
  }

}