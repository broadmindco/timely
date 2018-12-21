import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {LeadResponse} from "../../dto/lead-response";

@Component({
  selector: 'app-all-lead',
  templateUrl: './all-lead.component.html',
  styleUrls: ['./all-lead.component.css']
})
export class AllLeadComponent implements OnInit {

  leads: Array<LeadResponse> = [];

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.leads = this.route.snapshot.data.leads;
  }

}
