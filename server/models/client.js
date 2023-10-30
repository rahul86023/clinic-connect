// models/client.js
const mongoose = require("mongoose");

const clientSchema = new mongoose.Schema(
  {
    id: {
      type: Number,
    },
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
      required: true,
    },
    clientFlag: {
      type: Boolean,
      default: true, // You can set a default value if needed
    },
    gender: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    emailOptingIn: {
      type: Boolean,
      default: true,
    },
    primaryPhoneNumber: {
      type: String,
      required: true,
    },
    secondaryPhoneNumber: {
      type: String,
    },
    guardian: {
      type: String,
    },
    emergencyContactNumber: {
      type: String,
    },
    dob: {
      type: String,
      required: true,
    },
    note: {
      type: String,
    },
    billingNote: {
      type: String,
    },
    insurance: {
      id: {
        type: Number,
      },
      name: {
        type: String,
      },
      eapFlag: {
        type: Boolean,
        default: true,
      },
      teletherapyModifier: {
        type: String,
      },
    },
    insurancePolicyNumber: {
      type: String,
    },
    insuranceGroupNumber: {
      type: String,
    },
    insuredRelationship: {
      type: String,
    },
    insuredFirstName: {
      type: String,
    },
    insuredLastName: {
      type: String,
    },
    insuredDob: {
      type: String,
    },
    emergencyContactName: {
      type: String,
    },
    activeFlag: {
      type: Boolean,
      default: true,
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
    clinicians: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Clinician", // If you have a Clinician model, you can reference it here
      },
    ],
    location: {
      id: {
        type: Number,
      },
      name: {
        type: String,
      },
      code: {
        type: String,
      },
      address: {
        id: {
          type: Number,
        },
        address1: {
          type: String,
        },
        address2: {
          type: String,
        },
        state: {
          type: String,
        },
        city: {
          type: String,
        },
        zipCode: {
          type: String,
        },
      },
    },
  },
  { timestamps: true }
);

const Client = mongoose.model("Client", clientSchema);
module.exports = Client;
