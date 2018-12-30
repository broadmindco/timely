import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {LeadPath} from "../util/lead-path";
import {LeadResponse} from "../dto/lead-response";
import {LeadRequest} from "../dto/lead-request";

@Injectable({
  providedIn: 'root'
})
export class LeadService {

  constructor(private http: HttpClient) { }

  getAllLeads() {
    return this.http.get<Array<LeadResponse>>(LeadPath.ALL_LEADS);
  }

  getOneLead(id: string) {
    return this.http.get<LeadResponse>(LeadPath.ALL_LEADS + '/' + id);
  }

  updateLead(lead: LeadResponse | LeadRequest) {
    return this.http.put<LeadResponse>(LeadPath.ALL_LEADS + '/' + lead.id, lead);
  }

  createLead(lead: LeadRequest) {
    return this.http.post<LeadResponse>(LeadPath.ALL_LEADS, lead);
  }

}
