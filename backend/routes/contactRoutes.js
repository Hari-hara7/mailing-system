const express = require('express');
const router = express.Router();
const {
  getContacts,
  createContact,
  sendEmailToContact,
} = require('../controllers/contactController');

router.get('/', getContacts);
router.post('/', createContact);
router.post('/:id/email', sendEmailToContact);

module.exports = router;
