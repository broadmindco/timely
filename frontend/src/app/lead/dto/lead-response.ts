import {AddressResponse} from "./address-response";
import {SocialResponse} from "./social-response";
import {ContactResponse} from "./contact-response";
import {ContextMenu} from "../ui/context-menu";

export class LeadResponse {

  id: string;
  address: AddressResponse = new AddressResponse();
  social: SocialResponse = new SocialResponse();
  contacts: Array<ContactResponse> = [];
  name: string;
  status: string;
  imageUrl: string;

  // UI

  context: ContextMenu;

}
