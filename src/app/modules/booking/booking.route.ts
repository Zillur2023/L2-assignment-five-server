import { Router } from "express";
import { BookingControllers } from "./booking.controller";

const router = Router();

router.get("/all-booking", BookingControllers.getAllBookings);
router.post("/create", BookingControllers.createBooking);

router.get("/my-booking/:email", BookingControllers.getMybooking);

export const BookingRoutes = router;
