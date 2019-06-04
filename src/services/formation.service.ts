import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Formation } from 'src/models/Formation';
import { HttpClient } from '@angular/common/http';
import { AppSettings } from 'src/app/app.settings';

@Injectable({
  providedIn: 'root'
})

export class FormationService {

  formationSubject = new Subject<Formation[]>();
  
  private formations: Formation[] ;

  constructor(
    private httpClient: HttpClient
    ) { 
      this.getFormations();
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
      },
      (error) => {
        console.log('Erreur de récupération des formations  : ' + error.toString());
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