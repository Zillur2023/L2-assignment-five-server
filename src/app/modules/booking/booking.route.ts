import { Router } from "express";
import { BookingControllers } from "./booking.controller";
import auth from "../../middlewares/auth";
// import validateRequest from "../../middlewares/validateRequest";
// import { bookingValidations } from "./booking.validation";
import { USER_ROLE } from "../user/user.constant";

const router = Router();

router.get("/all-booking",auth(USER_ROLE.ADMIN,USER_ROLE.USER), BookingControllers.getAllBookings);
router.post(
  "/create",
  auth(USER_ROLE.ADMIN,USER_ROLE.USER),
    // validateRequest(bookingValidations.createBookingValidationSchema),
  BookingControllers.createBooking
);


router.get("/my-booking/:email",  BookingControllers.getMybooking)

export const BookingRoutes = router;
