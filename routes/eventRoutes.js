import express from 'express';
import {
  getEvents,
  createEvent,
  updateEvent,
  deleteEvent
} from '../controllers/eventController.js';

const router = express.Router();

router.get('/', getEvents);        // GET all events
router.post('/', createEvent);     // POST new event
router.put('/:id', updateEvent);   // PUT update event by ID
router.delete('/:id', deleteEvent);// DELETE event by ID

export default router;
