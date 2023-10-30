const express = require("express");
const router = express.Router();
const {
  createclinician,
  readallclinicians,
  readclinician,
  updateclinician,
  deleteclinician,
} = require("../api/v1/clinicians");

router.post("/createclinician", createclinician);
router.get("/readallclinicians", readallclinicians);
router.get("/readclinician/:id", readclinician);
router.put("/updateclinician/:id", updateclinician);
router.delete("/deleteclinician/:id", deleteclinician);

module.exports = router;
