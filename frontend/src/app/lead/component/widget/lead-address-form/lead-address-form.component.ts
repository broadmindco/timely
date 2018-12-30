import {Component, Input, OnInit} from '@angular/core';
import {LeadService} from '../../../service/lead.service';
import {LeadRequest} from '../../../dto/lead-request';
import {LeadResponse} from '../../../dto/lead-response';

@Component({
  selector: 'app-lead-address-form',
  templateUrl: './lead-address-form.component.html',
  styleUrls: ['./lead-address-form.component.css']
})
export class LeadAddressFormComponent implements OnInit {

  @Input() lead: LeadRequest | LeadResponse;

  constructor(
    private leadService: LeadService
  ) { }

  ngOnInit() {}

  saveAddress() {
    this.leadService
      .updateLead(this.lead)
      .subscribe(this.handleSuccess, this.handleError, this.handleComplete);
  }

  private handleSuccess(data) {
    console.log(data);
  }

  private handleError(error) {
    console.log(error);
  }

  private handleComplete() {
    console.log('Address Saving is done!');
  }

}
