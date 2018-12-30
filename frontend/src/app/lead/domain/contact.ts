import {HasSocial} from './has-social';
import {HasAddress} from './has-address';

export class Contact implements HasSocial, HasAddress {
  address: { street: string; state: string; city: string; country: string; zip: string; info: string };
  social: { email: string; phone: string; twitter: string; facebook: string; instagram: string; skype: string; website: string };
  id: string;
  name: string;
}
