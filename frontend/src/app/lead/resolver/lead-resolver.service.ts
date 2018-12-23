import {Injectable} from '@angular/core';
import {LeadService} from "../service/lead.service";
import {ActivatedRoute, ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from "@angular/router";
import {Observable} from "rxjs";
import {LeadResponse} from "../dto/lead-response";

@Injectable({
  providedIn: 'root'
})
export class LeadResolverService implements Resolve<LeadResponse>{

  constructor(
    private route: ActivatedRoute,
    private leadService: LeadService
  ) { }

  resolve(route: ActivatedRouteSnapshot,state: RouterStateSnapshot): Observable<any>|Promise<any>|any {
    return this.leadService.getOneLead(route.params.id);
  }

}
