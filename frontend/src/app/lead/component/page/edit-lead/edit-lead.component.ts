import {Component, OnInit} from '@angular/core';
import {HttpErrorResponse} from '@angular/common/http';
import {ActivatedRoute} from '@angular/router';
import {LeadService} from '../../../service/lead.service';
import {Lead} from '../../../domain/lead';

@Component({
  selector: 'app-edit-lead',
  templateUrl: './edit-lead.component.html',
  styleUrls: ['./edit-lead.component.css']
})
export class EditLeadComponent implements OnInit {

  lead: Lead = null;
  error: HttpErrorResponse;
  isLoading = true;
  isEditingSocial = false;
  isEditingAddress = false;

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
      () => this.isLoading = false
    );
  }

  updateLead = () => {
    this.leadService.updateLead(this.lead).subscribe();
  }

}
