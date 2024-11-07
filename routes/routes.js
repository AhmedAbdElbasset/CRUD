const express = require("express");
const app = express();
const router = express.Router();

const { eventValidationRules, validate } = require("../middlewares/validation");
const eventServices = require("../services/services");

router.post("/", eventValidationRules(), validate, async (req, res) => {
  try {
    const event = await eventServices.createEvent(req.body);
    res.status(201).json({
      success: true,
      data: event,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.massage,
    });
  }
});

router.get("/", async (req, res) => {
  try {
    const events = await eventServices.getAllEvents();
    res.status(200).json({
      success: true,
      data: events,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message,
    });
  }
});
// Get a single event by ID
router.get("/:id", async (req, res) => {
  try {
    const event = await eventServices.getEventById(req.params.id);
    if (!event)
      return res
        .status(404)
        .json({ success: false, message: "Event not found" });
    res.json({ success: true, data: event });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

// Update an event by ID
router.put("/:id", eventValidationRules(), validate, async (req, res) => {
  try {
    const event = await eventServices.updateEvent(req.params.id, req.body);
    if (!event)
      return res
        .status(404)
        .json({ success: false, message: "Event not found" });
    res.json({ success: true, data: event });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

// Delete an event by ID
router.delete("/:id", async (req, res) => {
  try {
    const event = await eventServices.deleteEvent(req.params.id);
    if (!event)
      return res.status(404).json({ success: false, message: "Event not found" });
    res.status(204).json({ success: true, data: event });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

module.exports = router;
