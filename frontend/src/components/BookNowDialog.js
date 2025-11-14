import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  TextField,
  IconButton,
  Box,
} from "@mui/material";
import { useDispatch } from "react-redux";
import CloseIcon from "@mui/icons-material/Close";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { createBooking } from "../redux/slices/bookingSlice";

const schema = yup.object().shape({
  name: yup.string().required("Full Name is required"),
  email: yup.string().email("Invalid email").required("Email is required"),
  phone: yup
    .string()
    .required("Phone number is required"),
  checkIn: yup.string().required("Check-in date is required"),
  checkOut: yup.string().required("Check-out date is required"),
  guests: yup
    .number()
    .typeError("Guests must be a number")
    .positive()
    .integer()
    .required("Number of guests is required"),
});

const BookingDialog = ({ open, onClose }) => {
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

 const onSubmit = async (values) => {
    try {
      console.log(values,'values')
      await dispatch(createBooking(values));
      reset();
      alert("Booking created!");
      onClose();
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <Dialog open={open} onClose={onClose} fullWidth maxWidth="sm" sx={{borderRadius: 10}}>
      <DialogTitle sx={{ m: 0, p: 2 }}>
        Book Your Stay
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: "absolute",
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[600],
          }}
        >
          <CloseIcon />
        </IconButton>
      </DialogTitle>

      <DialogContent dividers>
        <form id="bookingForm" onSubmit={handleSubmit(onSubmit)}>
          {/* Single Column Fields */}
          <Box display="flex" flexDirection="column" gap={2} mt={1}>
            <TextField
              label="Full Name"
              fullWidth
              {...register("name")}
              error={!!errors.name}
              helperText={errors.name?.message}
            />

            <TextField
              label="Email"
              fullWidth
              {...register("email")}
              error={!!errors.email}
              helperText={errors.email?.message}
            />

            <TextField
              label="Phone"
              fullWidth
              {...register("phone")}
              error={!!errors.phone}
              helperText={errors.phone?.message}
            />

            <TextField
              type="date"
              label="Check-in"
              fullWidth
              InputLabelProps={{ shrink: true }}
              {...register("checkIn")}
              error={!!errors.checkIn}
              helperText={errors.checkIn?.message}
            />

            <TextField
              type="date"
              label="Check-out"
              fullWidth
              InputLabelProps={{ shrink: true }}
              {...register("checkOut")}
              error={!!errors.checkOut}
              helperText={errors.checkOut?.message}
            />

            <TextField
              type="number"
              label="Number of Guests"
              fullWidth
              {...register("guests")}
              error={!!errors.guests}
              helperText={errors.guests?.message}
            />
          </Box>
        </form>
      </DialogContent>

      <DialogActions>
        <Button onClick={onClose} color="secondary">
          Cancel
        </Button>

        <Button
          type="submit"
          form="bookingForm"
          variant="contained"
          color="primary"
        >
          Booking
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default BookingDialog;
