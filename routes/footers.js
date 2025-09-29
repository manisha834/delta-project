const express = require("express");
const router = express.Router();
const footers = require("../controllers/footers.js");


//privacy route
router.get("/privacy",footers.renderPrivacy);

module.exports = router;
