const contactsModel = require('../models/contacts');

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

module.exports = {
  getAllContacts,
  getSingleContact
};