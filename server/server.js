const express = require("express");
const { default: mongoose } = require("mongoose");
const app = express();
const PORT = 5000;
const cors = require("cors");

app.use(cors());
app.use(express.json());
// db connection
mongoose
  .connect("mongodb://127.0.0.1:27017/mernstack_crud")
  .then(() => {
    console.log("db connection succesfully");
  })
  .catch((error) => {
    console.log(error);
  });

//user schema
const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const User = mongoose.model("User", userSchema);

//client Schema
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
//Clinician Schema

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

// create user
app.post("/createuser", async (req, res) => {
  try {
    const bodyData = req.body;
    const user = new User(bodyData);
    const userData = await user.save();
    res.send(userData);
  } catch (error) {
    res.send(error);
  }
});
// read all user

app.get("/readalluser", async (req, res) => {
  try {
    const userData = await User.find({});
    res.send(userData);
  } catch (error) {
    res.send(error);
  }
});
app.get("/read/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const user = await User.findById({ _id: id });
    res.send(user);
  } catch (error) {
    res.send(error);
  }
});

// update user

app.put("/updateuser/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const user = await User.findByIdAndUpdate({ _id: id }, req.body, {
      new: true,
    });
    res.send(user);
  } catch (error) {
    res.send(error);
  }
});

app.delete("/delete/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const user = await User.findByIdAndDelete({ _id: id });
    res.send(user);
  } catch (error) {
    res.send(error);
  }
});

app.post("/createclient", async (req, res) => {
  try {
    const bodyData = req.body;
    const client = new Client(bodyData);
    const clientData = await client.save();
    res.send(clientData);
  } catch (error) {
    res.status(500).send(error);
  }
});
app.get("/readallclients", async (req, res) => {
  try {
    const clientData = await Client.find({});
    res.send(clientData);
  } catch (error) {
    res.status(500).send(error);
  }
});
app.get("/readclient/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const client = await Client.findById(id);
    if (!client) {
      return res.status(404).send("Client not found");
    }
    res.send(client);
  } catch (error) {
    res.status(500).send(error);
  }
});
app.put("/updateclient/:id", async (req, res) => {
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
});
app.delete("/deleteclient/:id", async (req, res) => {
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
});
app.post("/createclinician", async (req, res) => {
  try {
    const bodyData = req.body;
    const clinician = new Clinician(bodyData);
    const clinicianData = await clinician.save();
    res.send(clinicianData);
  } catch (error) {
    res.status(500).send(error);
  }
});
app.get("/readallclinicians", async (req, res) => {
  try {
    const clinicianData = await Clinician.find({});
    res.send(clinicianData);
  } catch (error) {
    res.status(500).send(error);
  }
});
app.get("/readclinician/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const clinician = await Clinician.findById(id);
    if (!clinician) {
      return res.status(404).send("Clinician not found");
    }
    res.send(clinician);
  } catch (error) {
    res.status(500).send(error);
  }
});
app.put("/updateclinician/:id", async (req, res) => {
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
});
app.delete("/deleteclinician/:id", async (req, res) => {
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
});

app.listen(PORT, () => {
  console.log(`server ise running on ...${PORT}`);
});
