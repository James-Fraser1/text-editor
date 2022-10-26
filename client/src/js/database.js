import { openDB } from 'idb';

const initdb = async () =>
  openDB('jate', 1, {
    upgrade(db) {
      if (db.objectStoreNames.contains('jate')) {
        console.log('jate database already exists');
        return;
      }
      db.createObjectStore('jate', { keyPath: 'id', autoIncrement: true });
      console.log('jate database created');
    },
  });

// TODO: Add logic to a method that accepts some content and adds it to the database
export const putDb = async (content) => {
  // Const used to connect to the database
  const jateDb = await openDB('jate', 1);
  // Const used to create a new transaction with "jate" and "readwrite" requirements
  const tx = jateDb.transaction('jate', 'readwrite');
  // 

  // 

  console.error('putDb not implemented');
}

// TODO: Add logic for a method that gets all the content from the database
export const getDb = async () => {
  // Const used to connect to the database
  const jateDb = await openDB('jate', 1);
  // Const used to create a new transaction with "jate" requirement
  const tx = jateDb.transaction('jate');
  // 

  // 

  console.error('getDb not implemented');
}
initdb();