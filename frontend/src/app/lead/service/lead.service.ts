import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {LeadPath} from "../util/lead-path";

@Injectable({
  providedIn: 'root'
})
export class LeadService {

  constructor(private http: HttpClient) { }

  getAllLeads() {
    return this.http.get(LeadPath.ALL_LEADS)
  }

}
