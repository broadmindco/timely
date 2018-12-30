import {Component, Input, OnInit} from '@angular/core';
import {LeadResponse} from "../../../dto/lead-response";
import {LeadRequest} from "../../../dto/lead-request";
import {LeadService} from "../../../service/lead.service";

@Component({
  selector: 'app-lead-social-form',
  templateUrl: './lead-social-form.component.html',
  styleUrls: ['./lead-social-form.component.css']
})
export class LeadSocialFormComponent implements OnInit {

  @Input() lead: LeadResponse | LeadRequest;

  constructor(private leadService: LeadService) { }

  ngOnInit() {

  }

  updateSocial() {
    this.leadService
      .updateLead(this.lead)
      .subscribe(this.handleSuccess, this.handleError, this.handleComplete)
  }

  private handleSuccess(data) {
    console.log(data);
  }

  private handleError(error) {
    console.log(error);
  }

  private handleComplete() {
    console.log("Address Saving is done!")
  }

}
