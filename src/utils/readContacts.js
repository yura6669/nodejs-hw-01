import { PATH_DB } from '../constants/contacts.js';
import path from 'node:path';
import  fs from 'node:fs';

export const readContacts = async () => {
    const buffer = await fs.promises.readFile(path.resolve(PATH_DB), 'utf-8');
    const contacts = JSON.parse(buffer);
    return contacts;
};
