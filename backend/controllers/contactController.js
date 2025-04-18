const Contact = require('../models/Contact');
const sendMail = require('../utils/mailer');

exports.getContacts = async (req, res) => {
  const contacts = await Contact.find();
  res.json(contacts);
};

exports.createContact = async (req, res) => {
  const contact = new Contact(req.body);
  await contact.save();
  res.json(contact);
};

exports.sendEmailToContact = async (req, res) => {
  const contact = await Contact.findById(req.params.id);
  await sendMail(contact.email, 'Emergency Alert', 'This is a test alert!');
  res.json({ success: true });
};
