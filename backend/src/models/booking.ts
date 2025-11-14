import mongoose from "mongoose";

const bookingSchema = new mongoose.Schema({
  name: String,
  email: String,
  phone: String,
  checkIn: Date,
  checkOut: Date,
  guests: Number,
});

export default mongoose.model("Booking", bookingSchema);
