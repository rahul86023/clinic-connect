const express = require("express");
const session = require("express-session");
const passport = require("passport");
const { default: mongoose } = require("mongoose");
const app = express();
const PORT = 5000;
const cors = require("cors");
const dotenv = require("dotenv");
const passportGoogle = require("./utils/passport-google-strategy");

app.use(cors());
app.use(express.json());
// db connection

const connectToDatabase = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://rahulchaurasia966:esPqmQ1cnpAoVE8g@cluster0.ofbvs1c.mongodb.net/?retryWrites=true&w=majority",
      {
        useUnifiedTopology: true,
        useNewUrlParser: true,
      }
    );
    console.log("Connected to MongoDB Atlas");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
  }
};

connectToDatabase();
// Set up express-session
app.use(
  session({
    secret: "your-secret-key", // Replace with a strong secret key
    resave: false,
    saveUninitialized: true,
  })
);

// Initialize Passport and restore authentication state, if any, from the session.
app.use(passport.initialize());
app.use(passport.session());

// Include API routes
app.use("/api/v1/auth", require("./routes/auth"));
app.use("/api/v1/clients", require("./routes/clients"));
app.use("/api/v1/clinicians", require("./routes/clinicians"));

app.listen(PORT, () => {
  console.log(`server ise running on ...${PORT}`);
});
