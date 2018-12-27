import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {LeadResponse} from "../../dto/lead-response";
import {LeadService} from "../../service/lead.service";
import {HttpErrorResponse} from "@angular/common/http";

@Component({
  selector: 'app-show-lead',
  templateUrl: './show-lead.component.html',
  styleUrls: ['./show-lead.component.css']
})
export class ShowLeadComponent implements OnInit {

  lead: LeadResponse = null;
  error: HttpErrorResponse;
  loading = true;

  constructor(
    private route: ActivatedRoute,
    private leadService: LeadService
  ) {

  }

  ngOnInit() {
    const leadId = this.route.snapshot.params.id;

    this.leadService.getOneLead(leadId).subscribe(
      data => this.lead = data,
      error => this.error = error,
      () => this.loading = false
    )
  }

}
