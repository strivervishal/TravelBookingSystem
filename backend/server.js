const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const { createHandler } = require("graphql-http/lib/use/express");
const connectDB = require("./config/db");
const schema = require("./schemas/bookingSchema");

dotenv.config();
connectDB();

const app = express();
app.use(cors());
app.use(express.json());

// GraphQL Endpoint
app.use("/graphql", createHandler({ schema }));

app.get("/", (req, res) => {
  res.send("🌍 Travel Booking API Running...");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
