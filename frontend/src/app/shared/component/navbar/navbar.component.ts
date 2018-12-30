import {Component, OnInit} from '@angular/core';
import {faBuilding, faCog, faDollarSign, faTrash, faUser} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  icons = {
    faDollarSign,
    faBuilding,
    faUser,
    faCog,
    faTrash
  };

  constructor() { }

  ngOnInit() {
  }

}
