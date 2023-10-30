// controllers/clientsController.js
const Client = require("../../models/client");

// Functions for managing clients

const createclient = async (req, res) => {
  try {
    const bodyData = req.body;
    const client = new Client(bodyData);
    const clientData = await client.save();
    res.send(clientData);
  } catch (error) {
    res.status(500).send(error);
  }
};
const readallclients = async (req, res) => {
  try {
    const clientData = await Client.find({});
    res.send(clientData);
  } catch (error) {
    res.status(500).send(error);
  }
};
const readclient = async (req, res) => {
  try {
    const id = req.params.id;
    console.log(id, "id in read client");
    const client = await Client.findById(id);
    if (!client) {
      return res.status(404).send("Client not found");
    }
    res.send(client);
  } catch (error) {
    res.status(500).send(error);
  }
};
const updateclient = async (req, res) => {
  try {
    const id = req.params.id;
    const client = await Client.findByIdAndUpdate(id, req.body, { new: true });
    if (!client) {
      return res.status(404).send("Client not found");
    }
    res.send(client);
  } catch (error) {
    res.status(500).send(error);
  }
};
const deleteclient = async (req, res) => {
  try {
    const id = req.params.id;
    const client = await Client.findByIdAndDelete(id);
    if (!client) {
      return res.status(404).send("Client not found");
    }
    res.send(client);
  } catch (error) {
    res.status(500).send(error);
  }
};

module.exports = {
  createclient,
  readallclients,
  readclient,
  updateclient,
  deleteclient,
};
