import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';

export const addOneContact = async () => {
  const contacts = await readContacts();
  const newContact = {
    id: 6,
    name: 'Zeb',
    phone: '(142) 5701520',
    email: 'zhorburgh5@springer.com',
    job: 'Health Coach I',
  };
  contacts.push(newContact);
  writeContacts(contacts);
};

addOneContact();
