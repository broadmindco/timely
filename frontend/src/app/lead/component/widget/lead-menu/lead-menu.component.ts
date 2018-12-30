import {Component, Input, OnInit} from '@angular/core';
import {faList, faPlus} from '@fortawesome/free-solid-svg-icons';
import {Lead} from '../../../domain/lead';

@Component({
  selector: 'app-lead-menu',
  templateUrl: './lead-menu.component.html',
  styleUrls: ['./lead-menu.component.css']
})
export class LeadMenuComponent implements OnInit {

  @Input() lead: Lead = null;

  icons = {
    plus: faPlus,
    list: faList
  };

  constructor() { }

  ngOnInit() {
  }

}
