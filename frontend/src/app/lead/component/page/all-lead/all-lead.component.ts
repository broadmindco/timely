import {Component, OnInit} from '@angular/core';
import {Lead} from '../../../domain/lead';
import {HttpErrorResponse} from '@angular/common/http';
import {faEllipsisV, faInfo, faPen, faTrash, faUserPlus} from '@fortawesome/free-solid-svg-icons';
import {ActivatedRoute} from '@angular/router';
import {LeadService} from '../../../service/lead.service';
import {LOADING_SPINNGER_DURATION} from '../../../../shared/util/loading-spinner-duration';

@Component({
  selector: 'app-all-lead',
  templateUrl: './all-lead.component.html',
  styleUrls: ['./all-lead.component.css']
})
export class AllLeadComponent implements OnInit {

  states: Set<string> = new Set();
  leads: Array<Lead> = [];
  error: HttpErrorResponse;
  isLoading = true;

  draggedLead: Lead = null;
  selectedLeadForContext: Lead = null;

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
        this.states = new Set(this.leads.map(lead => lead.status).sort());
        setTimeout(() => {
          this.isLoading = false;
        }, LOADING_SPINNGER_DURATION);
      }
    );
  }

  filterLeadsByStatus(status: string) {
    return this.leads.filter(lead => lead.status === status);
  }

  dragStart($event, lead: Lead) {
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

  updateLeadStatus(leadResponse: Lead) {
    return this.leadService.updateLead(leadResponse).subscribe();
  }

  showRightclickMenu($event, lead: Lead) {
    this.selectedLeadForContext = lead;
    this.selectedLeadForContext.ctxMenu = {
      positionX: $event.clientX,
      positionY: $event.clientY,
      isOpen: false
    };
    return false;
  }

  disableContextMenu() {
    if (this.selectedLeadForContext) {
      this.selectedLeadForContext = null;
    }
  }

}
