import {HasSocial} from '../domain/has-social';
import {HasAddress} from '../domain/has-address';

export class ContactRequest implements HasSocial, HasAddress {
  social: { email: string; phone: string; twitter: string; facebook: string; instagram: string; skype: string; website: string };
  address: { street: string; state: string; city: string; country: string; zip: string; info: string };

  name: string;

}
