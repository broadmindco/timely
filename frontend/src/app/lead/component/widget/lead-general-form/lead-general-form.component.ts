import {Component, Input, OnInit} from '@angular/core';
import {LeadResponse} from "../../../dto/lead-response";
import {LeadRequest} from "../../../dto/lead-request";

@Component({
  selector: 'app-lead-general-form',
  templateUrl: './lead-general-form.component.html',
  styleUrls: ['./lead-general-form.component.css']
})
export class LeadGeneralFormComponent implements OnInit {

  @Input() lead: LeadResponse | LeadRequest;

  constructor() { }

  ngOnInit() {}

}
