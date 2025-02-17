import ReservationForm from "../pages/headingPages/BookingForm";
import { useReducer } from "react";
import { fetchAPI } from "../bookingAPI";
import Heading from "./headingPages/HeadingBooking";
export default function BookingPage() {
  function updateTimes(date) {
    return fetchAPI(date);
  }

  const output = fetchAPI(new Date());

  const [availableTimes, dispatch] = useReducer(updateTimes, output);

  return (
    <>
      <Heading/>
      <ReservationForm availableTimes={availableTimes} updateTimes={dispatch} />
    </>
  );
}