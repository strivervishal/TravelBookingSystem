const mongoose = require("mongoose");

const bookingSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  from: { type: String, required: true },
  to: { type: String, required: true },
  adults: { type: Number, required: true },
  children: { type: Number, required: true },
  travelClass: { type: String, required: true },
  departureDate: { type: String, required: true },
  journeyType: { type: String, required: true },
});

module.exports = mongoose.model("Booking", bookingSchema);
