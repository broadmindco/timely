import {AddressResponse} from "./address-response";
import {SocialResponse} from "./social-response";
import {ContactResponse} from "./contact-response";

export class LeadRequest {

  id: string;
  address: AddressResponse = new AddressResponse();
  social: SocialResponse = new SocialResponse();
  contacts: Array<ContactResponse> = [];
  name: string;
  status: string;
  imageUrl: string;

}
