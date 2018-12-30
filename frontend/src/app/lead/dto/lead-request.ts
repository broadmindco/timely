import {HasSocial} from '../domain/has-social';
import {HasAddress} from '../domain/has-address';
import {ContactRequest} from './contact-request';

export class LeadRequest implements HasSocial, HasAddress {
  address: { street: string; state: string; city: string; country: string; zip: string; info: string };
  social: { email: string; phone: string; twitter: string; facebook: string; instagram: string; skype: string; website: string };

  name: string;
  status: string;
  imageUrl: string;

  contacts: Array<ContactRequest> = [];

}
