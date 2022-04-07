const mongoose = require('mongoose');

const ContactSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Please provide your name.'],
  },
  email: {
    type: String,
    required: [true, 'Please provide an email.'],
  },
  phone: {
    type: Number,
    required: [true, 'Please provide an Number.'],
  },
  message: {
    type: String,
    required: [true, 'Please provide message.'],
  },
});

module.exports = mongoose.model('Contact', ContactSchema);
