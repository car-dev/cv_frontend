import { Component, OnInit } from '@angular/core';
import { FormationService } from 'src/app/services/formation.service';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-formations',
  templateUrl: './formations.component.html',
  styleUrls: ['./formations.component.scss']
})
export class FormationsComponent implements OnInit {

  formations : any[];
  formationSubscription : Subscription;

  constructor(
    private formationService: FormationService,
  ) {
   }

  ngOnInit() {
    this.formationService.getFormations();
    this.formationSubscription = this.formationService.formationSubject.subscribe(
      (formations: any[]) => {
        this.formations = formations;
        // console.log("this.formations = " + JSON.stringify(this.formations));
      }
    );
  }

  ngOnDestroy() {
    this.formationSubscription.unsubscribe();
  }
}
