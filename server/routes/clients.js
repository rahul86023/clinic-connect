const express = require("express");
const router = express.Router();
const {
  createclient,
  readallclients,
  readclient,
  updateclient,
  deleteclient,
} = require("../api/v1/clients");

router.post("/createclient", createclient);
router.get("/readallclients", readallclients);
router.get("/readclient/:id", readclient);
router.put("/updateclient/:id", updateclient);
router.delete("/deleteclient/:id", deleteclient);

module.exports = router;
