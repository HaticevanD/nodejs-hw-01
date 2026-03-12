import { createFakeContact } from '../utils/createFakeContact.js';
import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';
const generateContacts = async (number) => {
  const count = Number(number);
  if (!Number.isInteger(count) || count < 1) {
    console.log('Please provide a positive integer');
    return;
  }

  //Read
  try {
    const existingContacts = await readContacts();

    //Generate
    const newContacts = [];
    for (let i = 0; i < count; i++) {
      newContacts.push(createFakeContact());
    }
    //Write
    const updatedContacts = [...existingContacts, ...newContacts];
    await writeContacts(updatedContacts);

    console.log(`${count} new contact(s) added.`);
    console.log(`Total contacts now: ${updatedContacts.length}`);
  } catch (err) {
    console.error('Error while generating contacts:', err.message);
  }
};
generateContacts(3);
