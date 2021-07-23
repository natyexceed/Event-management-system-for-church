const router = require('express').Router();

router.route("/").get(eventController.getEvents);

router.route("/:id").get(eventController.getEvent);

module.exports = router;