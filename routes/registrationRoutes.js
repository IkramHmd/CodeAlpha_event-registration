const express = require('express');
const router = express.Router();
const Registration = require('../models/registration');
const Event = require('../models/event');

// Route to register for an event
router.post('/:eventId', async (req, res) => {
  const { userName, userEmail } = req.body;
  const registration = new Registration({
    eventId: req.params.eventId,
    userName,
    userEmail
  });
  await registration.save();
  res.redirect(`/events/${req.params.eventId}`);
});

module.exports = router;
