import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {LeadResponse} from "../../dto/lead-response";

@Component({
  selector: 'app-show-lead',
  templateUrl: './show-lead.component.html',
  styleUrls: ['./show-lead.component.css']
})
export class ShowLeadComponent implements OnInit {

  lead: LeadResponse;

  constructor(
    private route: ActivatedRoute
  ) {

  }

  ngOnInit() {
    this.lead = this.route.snapshot.data.lead;
  }

}
