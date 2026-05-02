const { MongoClient } = require('mongodb');

let database;

async function initDb() {
  if (database) {
    return database;
  }

  if (!process.env.MONGODB_URI) {
    throw new Error('MONGODB_URI is missing from .env');
  }

  if (!process.env.DATABASE_NAME) {
    throw new Error('DATABASE_NAME is missing from .env');
  }

  const client = new MongoClient(process.env.MONGODB_URI);

  await client.connect();

  database = client.db(process.env.DATABASE_NAME);

  return database;
}

function getDb() {
  if (!database) {
    throw new Error('Database has not been initialized. Call initDb first.');
  }

  return database;
}

module.exports = {
  initDb,
  getDb
};