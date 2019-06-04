import { Component, OnInit, Input } from '@angular/core';
import { Formation } from 'src/models/Formation';

@Component({
  selector: 'app-formations-list',
  templateUrl: './formations-list.component.html',
  styleUrls: ['./formations-list.component.scss']
})
export class FormationsListComponent implements OnInit {

  @Input() formations: Formation[];
  
  constructor() { }

  ngOnInit() {
  }

}
