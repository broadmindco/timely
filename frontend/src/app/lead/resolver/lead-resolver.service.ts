import { Injectable } from '@angular/core';
import {LeadService} from "../service/lead.service";

@Injectable({
  providedIn: 'root'
})
export class LeadResolverService {

  constructor(private leadService: LeadService) { }

  resolve() {
    return this.leadService.getAllLeads();
  }

}
