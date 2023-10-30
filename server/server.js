const express = require("express");
const { default: mongoose } = require("mongoose");
const app = express();
const PORT = 5000;
const cors = require("cors");
const dotenv = require("dotenv");

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
// Include API routes

app.use("/api/v1/clients", require("./routes/clients"));
app.use("/api/v1/clinicians", require("./routes/clinicians"));

app.listen(PORT, () => {
  console.log(`server ise running on ...${PORT}`);
});
