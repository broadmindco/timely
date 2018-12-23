import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {LeadResponse} from "../../dto/lead-response";
import {faEllipsisV, faInfo, faPen, faTrash, faUserPlus} from "@fortawesome/free-solid-svg-icons";
import {LeadRequest} from "../../dto/lead-request";
import {LeadService} from "../../service/lead.service";

@Component({
  selector: 'app-all-lead',
  templateUrl: './all-lead.component.html',
  styleUrls: ['./all-lead.component.css']
})
export class AllLeadComponent implements OnInit {

  states: Set<string> = new Set();
  leads: Array<LeadResponse> = [];

  draggedLead: LeadResponse = null;
  selectedLeadForContext: LeadResponse = null;

  faInfo = faInfo;
  faDelete = faTrash;
  faUserPlus = faUserPlus;
  faEllipsisV = faEllipsisV;
  faPencil = faPen;


  constructor(
    private route: ActivatedRoute,
    private leadService: LeadService
  ) { }

  ngOnInit() {
    this.leads = this.route.snapshot.data.leads;
    // ES6 to the rescue!
    this.states = new Set(this.leads.map(lead => lead.status));
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

      const request = new LeadRequest();
      request.id = this.draggedLead.id;
      request.status = this.draggedLead.status;
      request.name = this.draggedLead.name;

      this.draggedLead = null;
      this.updateLeadStatus(request);
    }
  }

  updateLeadStatus(leadRequest: LeadRequest) {
    return this.leadService.saveLead(leadRequest);
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
