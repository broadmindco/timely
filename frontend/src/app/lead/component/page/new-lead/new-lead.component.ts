import { Component, OnInit } from '@angular/core';
import {HttpErrorResponse} from '@angular/common/http';
import {LeadService} from '../../../service/lead.service';
import {Lead} from '../../../domain/lead';

@Component({
  selector: 'app-new-lead',
  templateUrl: './new-lead.component.html',
  styleUrls: ['./new-lead.component.css']
})
export class NewLeadComponent implements OnInit {

  lead: Lead = null;
  error: HttpErrorResponse;
  isLoading = false;

  constructor(private leadService: LeadService) { }

  ngOnInit() {}

  createLead = () => {
    this.leadService.createLead(this.lead).subscribe();
  }

}
