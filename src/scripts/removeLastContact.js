import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';

export const removeLastContact = async () => {
  try {
    const existingContacts = await readContacts();
    if (existingContacts.length > 0) {
      existingContacts.pop();
      await writeContacts(existingContacts);
    } else {
      console.log('No contacts to remove');
      return;
    }
  } catch (error) {
    console.log(error);
  }
};

removeLastContact();
