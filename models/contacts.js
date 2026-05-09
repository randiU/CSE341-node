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

async function createContact(contact) {
  const db = getDb();

  const result = await db.collection('contacts').insertOne(contact);

  return result.insertedId;
}

async function updateContact(id, contact) {
  const db = getDb();

  if (!ObjectId.isValid(id)) {
    return false;
  }

  const result = await db.collection('contacts').replaceOne({ _id: new ObjectId(id) }, contact);

  return result.matchedCount > 0;
}

async function deleteContact(id) {
  const db = getDb();

  if (!ObjectId.isValid(id)) {
    return false;
  }

  const result = await db.collection('contacts').deleteOne({
    _id: new ObjectId(id)
  });

  return result.deletedCount > 0;
}

module.exports = {
  getAllContacts,
  getContactById,
  createContact,
  updateContact,
  deleteContact
};
