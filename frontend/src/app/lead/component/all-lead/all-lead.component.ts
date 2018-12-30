import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {LeadResponse} from "../../dto/lead-response";
import {faEllipsisV, faInfo, faPen, faTrash, faUserPlus} from "@fortawesome/free-solid-svg-icons";
import {LeadRequest} from "../../dto/lead-request";
import {LeadService} from "../../service/lead.service";
import {HttpErrorResponse} from "@angular/common/http";

@Component({
  selector: 'app-all-lead',
  templateUrl: './all-lead.component.html',
  styleUrls: ['./all-lead.component.css']
})
export class AllLeadComponent implements OnInit {

  states: Set<string> = new Set();
  leads: Array<LeadResponse> = [];
  error: HttpErrorResponse;
  isLoading = true;

  draggedLead: LeadResponse = null;
  selectedLeadForContext: LeadResponse = null;

  icons = {
    faInfo,
    faTrash,
    faUserPlus,
    faEllipsisV,
    faPen
  };

  constructor(
    private route: ActivatedRoute,
    private leadService: LeadService
  ) { }

  ngOnInit() {
    this.leadService.getAllLeads().subscribe(
      data => this.leads = data,
      error => this.error = error,
      () => {
        this.states = new Set(this.leads.map(lead => lead.status));
        this.isLoading = false;
      }
    );
  }

  filterLeadsByStatus(status: string) {
    return this.leads.filter(lead => lead.status == status);
  }

  dragStart($event, lead: LeadResponse) {
    this.draggedLead = lead;
  }

  dragEnd($event, lead, state) {
    this.draggedLead = null;
  }

  dragOver($event) {
    if(this.draggedLead != null) {
      return $event.preventDefault();
    }
    console.log($event);
  }

  dragDrop($event, state) {
    if(this.draggedLead) {
      this.draggedLead.status = state;
      this.updateLeadStatus(this.draggedLead);
      this.draggedLead = null;
    }
  }

  updateLeadStatus(leadResponse: LeadResponse) {
    return this.leadService.updateLead(leadResponse).subscribe();
  }

  showRightclickMenu($event, lead: LeadResponse) {
    this.selectedLeadForContext = lead;
    this.selectedLeadForContext.context = {
      positionX: $event.clientX,
      positionY: $event.clientY,
      isOpen: false
    };
    return false;
  }

  disableContextMenu() {
    if(this.selectedLeadForContext) {
      this.selectedLeadForContext = null;
    }
  }

}
