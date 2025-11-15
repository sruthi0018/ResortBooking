import axios from "axios";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoading: false,
  error: null,
  bookings: [],
  booking: null,
};

const slice = createSlice({
  name: "booking",
  initialState,
  reducers: {
    startLoading(state) {
      state.isLoading = true;
      state.error = null;
    },
    hasError(state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },
    createBookingSuccess(state, action) {
      state.isLoading = false;
      state.bookings.push(action.payload);
    },
    getBookingsSuccess(state, action) {
      state.isLoading = false;
      state.bookings = action.payload;
    },
    getBookingSuccess(state, action) {
      state.isLoading = false;
      state.booking = action.payload;
    },
    clearBooking(state) {
      state.booking = null;
    },
  },
});

export const { clearBooking } = slice.actions;
export default slice.reducer;

export function createBooking(data) {
  return async (dispatch) => {
    dispatch(slice.actions.startLoading());
    try {
      console.log(data, "dd");
      const response = await axios.post(
        `${process.env.REACT_APP_BASE_URL}/api/bookings`,
        data
      );

      dispatch(slice.actions.createBookingSuccess(response.data));
      return response.data;
    } catch (error) {
      dispatch(slice.actions.hasError(error.message));
      throw error;
    }
  };
}

export function getBookings() {
  return async (dispatch) => {
    dispatch(slice.actions.startLoading());
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_BASE_URL}/api/bookings`
      );

      dispatch(slice.actions.getBookingsSuccess(response.data));
      return response.data;
    } catch (error) {
      dispatch(slice.actions.hasError(error.message));
      throw error;
    }
  };
}
