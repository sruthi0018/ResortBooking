import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db";
var cors = require('cors')
import bookingsRouter from "./routes/booking";


dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors())
app.use(express.json());
connectDB();

app.use("/api/bookings", bookingsRouter);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
