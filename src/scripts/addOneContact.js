import { createFakeContact } from '../utils/createFakeContact.js';
import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';

export const addOneContact = async () => {
  try {
    //Read
    const existingContacts = await readContacts();
    //Create
    const newContact = createFakeContact();
    //Add
    const updatedContacts = [...existingContacts, newContact];
    //Write
    await writeContacts(updatedContacts);

    console.log('1 new contact added successfully.');
    console.log(`Total contacts now: ${updatedContacts.length}`);
  } catch (err) {
    console.error('Error adding one contact:', err.message);
  }
};

addOneContact();
