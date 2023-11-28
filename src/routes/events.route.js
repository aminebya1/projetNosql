// routes/eventRoutes.js
const express = require('express');
const EventController = require('../controllers/event.controller');
const router = express.Router();

router.post('/events', EventController.createEvent);
router.get('/events', EventController.getAllEvents);
router.get('/events/:id', EventController.getEventById);
router.patch('/events/:id', EventController.updateEvent);
router.delete('/events/:id', EventController.deleteEvent);

module.exports = router;
