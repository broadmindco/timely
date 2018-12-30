import { Injectable } from '@angular/core';
import {Lead} from '../domain/lead';
import {LeadRequest} from '../dto/lead-request';

@Injectable({
  providedIn: 'root'
})
export class LeadConverterService {

  constructor() { }

  convertToLeadRequest(lead: Lead): LeadRequest {
    return {
      name: lead.name,
      address: lead.address,
      social: lead.social,
      status: lead.status,
      imageUrl: lead.imageUrl,
      contacts: lead.contacts
    };
  }

}
