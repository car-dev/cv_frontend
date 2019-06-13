import { Component, OnInit, Input } from '@angular/core';
import { Formation } from 'src/app/models/Formation';
import { Subscription } from 'rxjs';
import { Module } from 'src/app/models/Module';

@Component({
  selector: 'app-modules-list',
  templateUrl: './modules-list.component.html',
  styleUrls: ['./modules-list.component.scss']
})
export class ModulesListComponent implements OnInit {

  @Input() modules: Module[];
  listlenght: number;


  constructor(
  ) { }

  ngOnInit() {
    this.listlenght = this.modules.length ;
  }

  ngOnDestroy() {
  }

}
