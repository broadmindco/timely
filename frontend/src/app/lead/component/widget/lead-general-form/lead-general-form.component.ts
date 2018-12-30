import {Component, Input, OnInit} from '@angular/core';
import {Lead} from '../../../domain/lead';

@Component({
  selector: 'app-lead-general-form',
  templateUrl: './lead-general-form.component.html',
  styleUrls: ['./lead-general-form.component.css']
})
export class LeadGeneralFormComponent implements OnInit {

  @Input() lead: Lead;

  constructor() { }

  ngOnInit() {}

}
