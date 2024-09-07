import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';

export const removeLastContact = async () => {
  const contacts = await readContacts();
  if (contacts.length > 0) {
    const removedContact = contacts.pop();
    await writeContacts(contacts);
    console.log('Removed last contact', removedContact);
  } else {
    console.log('No contacts to remove');
  }
};

removeLastContact();
