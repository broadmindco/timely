import {AddressResponse} from "./address-response";
import {SocialResponse} from "./social-response";
import {ContactResponse} from "./contact-response";

export class LeadResponse {

  address: AddressResponse;
  social: SocialResponse;
  contacts: Array<ContactResponse> = [];
  name: string;
  status: string;

}
