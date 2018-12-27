import { Component, OnInit } from '@angular/core';
import {faList, faPlus} from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: 'app-lead-menu',
  templateUrl: './lead-menu.component.html',
  styleUrls: ['./lead-menu.component.css']
})
export class LeadMenuComponent implements OnInit {

  icons = {
    plus: faPlus,
    list: faList
  };

  constructor() { }

  ngOnInit() {
  }

}
