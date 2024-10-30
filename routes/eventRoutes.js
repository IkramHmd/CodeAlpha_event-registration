const express = require('express');
const router = express.Router();
const Event = require('../models/event');

// Route to get all events
router.get('/', async (req, res) => {
  const events = await Event.find();
  res.render('index', { events });
});

// Route to get a single event
router.get('/:id', async (req, res) => {
  const event = await Event.findById(req.params.id);
  res.render('eventDetails', { event });
});

module.exports = router;
