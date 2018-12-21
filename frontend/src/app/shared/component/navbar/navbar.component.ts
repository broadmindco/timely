import { Component, OnInit } from '@angular/core';
import {faBuilding, faCog, faDollarSign, faEnvelope, faLock, faUser} from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  faDollar = faDollarSign;
  faBuilding = faBuilding;
  faUser = faUser;
  faSettings = faCog;

  constructor() { }

  ngOnInit() {
  }

}
