import { Component, OnInit } from '@angular/core';
import {LeadResponse} from "../../dto/lead-response";
import {HttpErrorResponse} from "@angular/common/http";
import {LeadService} from "../../service/lead.service";

@Component({
  selector: 'app-new-lead',
  templateUrl: './new-lead.component.html',
  styleUrls: ['./new-lead.component.css']
})
export class NewLeadComponent implements OnInit {

  lead: LeadResponse = <LeadResponse> {};
  error: HttpErrorResponse;
  isLoading = false;

  constructor(private leadService: LeadService) { }

  ngOnInit() {}

  createLead = () => {
    this.leadService.createLead(this.lead).subscribe();
  }

}
