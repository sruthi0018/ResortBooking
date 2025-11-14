import { Request, Response } from "express";
import Booking from "../models/booking";

export const createBooking = async (req: Request, res: Response) => {
  try {
    const booking = await Booking.create(req.body);
    res.status(201).json(booking);
  } catch (err) {
    res.status(500).json({ message: "Error creating booking" });
  }
};

export const getBookings = async (_: Request, res: Response) => {
  const bookings = await Booking.find();
  res.json(bookings);
};
