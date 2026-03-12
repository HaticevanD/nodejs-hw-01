import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';

export const removeLastContact = async () => {
  const contacts = await readContacts();
  if (contacts.length === 0) {
    return;
  }

  const removed = contacts.pop();
  await writeContacts(contacts);
  console.log('Removed:', removed);
  console.log('Remaining:', contacts.length);
};
removeLastContact();
