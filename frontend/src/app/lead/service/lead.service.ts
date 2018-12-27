import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {LeadPath} from "../util/lead-path";
import {LeadRequest} from "../dto/lead-request";
import {LeadResponse} from "../dto/lead-response";

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

  async saveLead(leadRequest: LeadRequest) {
    try {
      const response = await this.http.put(LeadPath.ALL_LEADS + '/' + leadRequest.id, leadRequest).toPromise();
    } catch(e) {
      throw e;
    }
  }

}
