import httpStatus from "http-status";
import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import { BookingServices } from "./booking.service";

const createBooking = catchAsync(async (req, res) => {
  const result = await BookingServices.createBookingIntoDB( req.body);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Booking successful",
    data: result,
  });
});

const getAllBookings = catchAsync(async (req, res) => {
  const result = await BookingServices.getAllBookingsFromDB();

  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message:  "All bookings retrieved successfully",
    data: result,
  });
});
const getMybooking = catchAsync(async (req, res) => {
  const { email } = req.params
  const result = await BookingServices.getMybookingIntoDB(email);


  sendResponse(res, {
    success:  true ,
    statusCode:  httpStatus.OK ,
    message:  "User bookings retrieved successfully" ,
    data: result,
  });
});

export const BookingControllers = {
  createBooking,
  getAllBookings,
  getMybooking,
};
