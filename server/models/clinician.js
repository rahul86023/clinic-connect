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
  },
  { timestamps: true }
);

const Clinician = mongoose.model("Clinician", clinicianSchema);

module.exports = Clinician;
