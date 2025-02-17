import { Routes, Route } from "react-router-dom";
import Confirmation from "../pages/headingPages/ConfirmedBooking";
import HomePage from "../pages/HomePage";
import Reservation from "../pages/BookingPage";
import Order from "../pages/Orders";

export default function Routing() {
  return (
    <Routes>

      <Route path="/" element={<HomePage />}/>
      <Route path="/reservations" element={<Reservation />} />
      <Route path="/confirmation" element={<Confirmation />} />
      <Route path="/order" element={<Order />} />
    </Routes>
  );
}  