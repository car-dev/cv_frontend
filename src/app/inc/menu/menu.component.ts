import { Component, OnInit } from '@angular/core';
import { Menu } from 'src/models/Menu';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  menus = [
    new Menu('Accueil', '/home'),
    new Menu('Formation', '/formation'),
    new Menu('Experience', '/experience'),
    new Menu('Telechargement', '/download'),
  ]

  constructor() { }

  ngOnInit() {
  }

}
