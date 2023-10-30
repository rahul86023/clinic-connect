// models/clinician.js
const mongoose = require("mongoose");

const clinicianSchema = new mongoose.Schema(
  {
    id: {
      type: Number,
      default: 0,
    },
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
      required: true,
    },
    primaryPhoneNumber: {
      type: String,
      required: true,
    },
    extension: {
      type: Number,
      default: 0,
    },
    degreeAndLicense: {
      type: String,
    },
    bioLink: {
      type: String,
      required: true,
    },
    signature: {
      type: String,
    },
    teletherapyFlag: {
      type: Boolean,
      default: true,
    },
    activeFlag: {
      type: Boolean,
      default: true,
    },
    person: {
      email: {
        type: String,
        required: true,
      },
      secret: {
        type: String,
        required: true,
      },
      role: {
        id: {
          type: Number,
          default: 2,
        },
      },
    },
    address: {
      address1: {
        type: String,
        required: true,
      },
      address2: {
        type: String,
      },
      city: {
        type: String,
        required: true,
      },
      state: {
        type: String,
        required: true,
      },
      zipCode: {
        type: String,
        required: true,
      },
    },
    // locations: [
    //   {
    //     type: mongoose.Schema.Types.ObjectId,
    //     ref: "Location", // Reference to a Location model if available
    //   },
    // ],
    // locationsNotAcceptingNewPatients: [
    //   {
    //     type: mongoose.Schema.Types.ObjectId,
    //     ref: "Location",
    //   },
    // ],
    // specialities: [
    //   {
    //     type: String, // You can use a specific schema or model for specialities
    //   },
    // ],
    // insurances: [
    //   {
    //     type: String, // You can use a specific schema or model for insurances
    //   },
    // ],
    // supervisees: [
    //   {
    //     type: mongoose.Schema.Types.ObjectId,
    //     ref: "Supervisee", // Reference to a Supervisee model if available
    //   },
    // ],
    // licensedStates: [
    //   {
    //     type: String, // You can use a specific schema or model for states
    //   },
    // ],
    // demographics: [
    //   {
    //     type: String, // You can use a specific schema or model for demographics
    //   },
    // ],
    // supervisingProvider: {
    //   type: mongoose.Schema.Types.ObjectId,
    //   ref: "Provider", // Reference to a Provider model if available
    // },
  },
  { timestamps: true }
);

const Clinician = mongoose.model("Clinician", clinicianSchema);

module.exports = Clinician;
