import {AddressResponse} from "./address-response";
import {SocialResponse} from "./social-response";
import {ContactResponse} from "./contact-response";

export class LeadRequest {

  id: string;
  address: AddressResponse;
  social: SocialResponse;
  contacts: Array<ContactResponse> = [];
  name: string;
  status: string;

}
