import {Component, OnInit} from '@angular/core';
import {HttpErrorResponse} from '@angular/common/http';
import {ActivatedRoute} from '@angular/router';
import {LeadService} from '../../../service/lead.service';
import {Lead} from '../../../domain/lead';

@Component({
  selector: 'app-show-lead',
  templateUrl: './show-lead.component.html',
  styleUrls: ['./show-lead.component.css']
})
export class ShowLeadComponent implements OnInit {

  lead: Lead = null;
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
    );
  }

}
