import {HasAddress} from './has-address';
import {HasSocial} from './has-social';
import {HasContextMenu} from './has-context-menu';
import {Contact} from './contact';

export class Lead implements HasAddress, HasSocial, HasContextMenu {
  address: { street: string; state: string; city: string; country: string; zip: string; info: string };
  ctxMenu: { positionY: number; positionX: number; isOpen: boolean };
  social: { email: string; phone: string; twitter: string; facebook: string; instagram: string; skype: string; website: string };

  name: string;
  status: string;
  imageUrl: string;
  id: string;
  contacts: Array<Contact> = [];

}
