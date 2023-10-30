// controllers/clientsController.js
const Clinician = require("../../models/clinician");

// Functions for managing clients
const createclinician = async (req, res) => {
  try {
    const bodyData = req.body;
    const clinician = new Clinician(bodyData);
    const clinicianData = await clinician.save();
    res.send(clinicianData);
  } catch (error) {
    res.status(500).send(error);
  }
};
const readallclinicians = async (req, res) => {
  try {
    const clinicianData = await Clinician.find({});
    res.send(clinicianData);
  } catch (error) {
    res.status(500).send(error);
  }
};
const readclinician = async (req, res) => {
  try {
    const id = req.params.id;
    console.log(id);
    const clinician = await Clinician.findById(id);
    if (!clinician) {
      return res.status(404).send("Clinician not found");
    }
    res.send(clinician);
  } catch (error) {
    res.status(500).send(error);
  }
};
const updateclinician = async (req, res) => {
  try {
    const id = req.params.id;
    const clinician = await Clinician.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    if (!clinician) {
      return res.status(404).send("Clinician not found");
    }
    res.send(clinician);
  } catch (error) {
    res.status(500).send(error);
  }
};
const deleteclinician = async (req, res) => {
  try {
    const id = req.params.id;
    const clinician = await Clinician.findByIdAndDelete(id);
    if (!clinician) {
      return res.status(404).send("Clinician not found");
    }
    res.send(clinician);
  } catch (error) {
    res.status(500).send(error);
  }
};

module.exports = {
  createclinician,
  readallclinicians,
  readclinician,
  updateclinician,
  deleteclinician,
};
