import { PATH_DB } from '../constants/contacts.js';
import path from 'node:path';
import fs from 'fs/promises';

export const writeContacts = async (updatedContacts) => {
    const filePath = path.resolve(PATH_DB);
    const jsonData = JSON.stringify(updatedContacts, null, 2);
    await fs.writeFile(filePath, jsonData, 'utf-8');
};
