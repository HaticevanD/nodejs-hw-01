import fs from 'node:fs/promises';
import { PATH_DB } from '../constants/contacts.js';

export const writeContacts = async (updatedContacts) => {
  try {
    const jsonString = JSON.stringify(updatedContacts, null, 2);
    await fs.writeFile(PATH_DB, jsonString, 'utf-8');
  } catch (err) {
    console.error('writeContacts error:', err.message);
    throw err;
  }
};
