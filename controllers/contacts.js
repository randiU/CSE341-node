const contactsModel = require('../models/contacts');

//GET 
async function getAllContacts(req, res) {
  try {
    const contacts = await contactsModel.getAllContacts();

    res.status(200).json(contacts);
  } catch (error) {
    console.error('Error getting contacts:', error);

    res.status(500).json({
      message: 'An error occurred while getting contacts.'
    });
  }
}

//GET
async function getSingleContact(req, res) {
  try {
    const contactId = req.params.id;

    const contact = await contactsModel.getContactById(contactId);

    if (!contact) {
      return res.status(404).json({
        message: 'Contact not found.'
      });
    }

    res.status(200).json(contact);
  } catch (error) {
    console.error('Error getting contact:', error);

    res.status(500).json({
      message: 'An error occurred while getting the contact.'
    });
  }
}

//POST
async function createContact(req, res) {
  try {
    const contact = {
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      email: req.body.email,
      favoriteColor: req.body.favoriteColor,
      birthday: req.body.birthday
    };

    const insertedId = await contactsModel.createContact(contact);

    res.status(201).json(insertedId);
  } catch (error) {
    console.error('Error creating contact:', error);

    res.status(500).json({
      message: 'An error occurred while creating the contact.'
    });
  }
}

//PUT
async function updateContact(req, res) {
  try {
    const contactId = req.params.id;

    const contact = {
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      email: req.body.email,
      favoriteColor: req.body.favoriteColor,
      birthday: req.body.birthday
    };

    const wasUpdated = await contactsModel.updateContact(contactId, contact);

    if (!wasUpdated) {
      return res.status(404).json({
        message: 'Contact not found.'
      });
    }

    res.status(204).send();
  } catch (error) {
    console.error('Error updating contact:', error);

    res.status(500).json({
      message: 'An error occurred while updating the contact.'
    });
  }
}

//DELETE
async function deleteContact(req, res) {
  try {
    const contactId = req.params.id;

    const wasDeleted = await contactsModel.deleteContact(contactId);

    if (!wasDeleted) {
      return res.status(404).json({
        message: 'Contact not found.'
      });
    }

    res.status(200).json({
      message: 'Contact deleted successfully.'
    });
  } catch (error) {
    console.error('Error deleting contact:', error);

    res.status(500).json({
      message: 'An error occurred while deleting the contact.'
    });
  }
}

module.exports = {
  getAllContacts,
  getSingleContact,
  createContact,
  updateContact,
  deleteContact
};
