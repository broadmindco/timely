import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {LeadPath} from '../util/lead-path';
import {Lead} from '../domain/lead';
import {LeadConverterService} from '../converter/lead-converter.service';
@Injectable({
  providedIn: 'root'
})
export class LeadService {

  constructor(
    private http: HttpClient,
    private leadConverter: LeadConverterService
  ) { }

  getAllLeads() {
    return this.http.get<Array<Lead>>(LeadPath.ALL_LEADS);
  }

  getOneLead(id: string) {
    return this.http.get<Lead>(LeadPath.ALL_LEADS + '/' + id);
  }

  updateLead(lead: Lead) {
    const leadRequest = this.leadConverter.convertToLeadRequest(lead);
    return this.http.put<Lead>(LeadPath.ALL_LEADS + '/' + lead.id, leadRequest);
  }

  createLead(lead: Lead) {
    return this.http.post<Lead>(LeadPath.ALL_LEADS, lead);
  }

}
