import { Component, OnInit } from '@angular/core';
import {faPlusCircle} from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  faPlus = faPlusCircle;

  constructor() { }

  ngOnInit() {
  }

}
