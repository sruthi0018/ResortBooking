import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Box,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";
import { getBookings } from "../redux/slices/bookingSlice";
import { fDate } from "../utils/FormatDate";

const AdminBookingListPage = () => {
  const dispatch = useDispatch();
  const { bookings, isLoading } = useSelector((state) => state.booking);

  useEffect(() => {
    dispatch(getBookings());
  }, [dispatch]);

  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h5" mb={3} fontWeight="bold">
        Booking List
      </Typography>

      <TableContainer component={Paper} elevation={4}>
        <Table>
          <TableHead>
            <TableRow sx={{ backgroundColor: "#f5f5f5" }}>
              <TableCell>
                <strong>#</strong>
              </TableCell>
              <TableCell>
                <strong>Name</strong>
              </TableCell>
              <TableCell>
                <strong>Email</strong>
              </TableCell>
              <TableCell>
                <strong>Phone</strong>
              </TableCell>
              <TableCell>
                <strong>Check-In</strong>
              </TableCell>
              <TableCell>
                <strong>Check-Out</strong>
              </TableCell>
              <TableCell>
                <strong>Guests</strong>
              </TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {bookings.length === 0 && !isLoading && (
              <TableRow>
                <TableCell colSpan={7} align="center" sx={{ py: 3 }}>
                  No bookings found.
                </TableCell>
              </TableRow>
            )}
            {isLoading && (
              <TableRow>
                <TableCell colSpan={7} align="center" sx={{ py: 3 }}>
                  Loading...
                </TableCell>
              </TableRow>
            )}
            {bookings.map((b, index) => (
              <TableRow key={b._id || index}>
                <TableCell>{index + 1}</TableCell>
                <TableCell>{b.name}</TableCell>
                <TableCell>{b.email}</TableCell>
                <TableCell>{b.phone}</TableCell>
                <TableCell>{fDate(b.checkIn)}</TableCell>
                <TableCell>{fDate(b.checkOut)}</TableCell>
                <TableCell>{b.guests}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default AdminBookingListPage;
