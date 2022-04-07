const Contact = require('../models/Contact.js');

const createContact = async (req, res) => {
  try {
    const contact = await Contact.create(req.body);
    res.status(201).json({ contact });
  } catch (error) {
    res.status(500).json({ message: 'Error creating contact.' });
    console.log(error);
  }
};

const getContact = async (req, res) => {
  try {
    const contact = await Contact.findById(req.params.id);
    res.status(200).json({
      contact,
    });
  } catch (err) {}
};

module.exports = { createContact, getContact };
