const express = require("express");
const router = express.Router();
const footers = require("../controllers/pages");


//privacy route
router.get("/privacy", (footers.renderPrivacy));

module.exports = router;
