const { ObjectId } = require('mongodb');
const { getDb } = require('../db/connect');

async function getAllContacts() {
  const db = getDb();

  return db.collection('contacts').find({}).toArray();
}

async function getContactById(id) {
  const db = getDb();

  if (!ObjectId.isValid(id)) {
    return null;
  }

  return db.collection('contacts').findOne({
    _id: new ObjectId(id)
  });
}

module.exports = {
  getAllContacts,
  getContactById
};