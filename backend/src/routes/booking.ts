import { Router } from "express";
import { createBooking, getBookings } from "../controllers/booking";

const router = Router();

router.post("/", createBooking);
router.get("/", getBookings);

export default router;
