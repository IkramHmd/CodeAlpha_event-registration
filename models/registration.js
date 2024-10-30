const mongoose = require('mongoose');

const registrationSchema = new mongoose.Schema({
  eventId: { type: mongoose.Schema.Types.ObjectId, ref: 'Event' },
  userName: String,
  userEmail: String,
});

module.exports = mongoose.model('Registration', registrationSchema);
