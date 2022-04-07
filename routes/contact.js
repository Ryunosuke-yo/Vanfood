const router = require('express').Router();
const { createContact, getContact } = require('../controllers/contactController');

router.route('/:id').get(getContact);
router.route('/').post(createContact);


module.exports = router;
