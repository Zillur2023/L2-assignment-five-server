import httpStatus from "http-status";
import { User } from "../user/user.model";
import Service from "../service/service.model";
import Slot from "../solt/slot.model";
import AppError from "../../errors/AppError";
import Booking from "./booking.model";
import { JwtPayload } from "jsonwebtoken";
import { initiatePayment } from "../payment/payment.utils";

const createBookingIntoDB = async (bookingData: any) => {
  const {  bookingInfo, ...userData } = bookingData;
  console.log({bookingData})

  const isCustomerExists = await User.findOne({ email: userData.email });

  if (!isCustomerExists) {
    throw new AppError(httpStatus.NOT_FOUND, "This customer not found");
  }

  const isServiceExists = await Service.findById(bookingInfo.service);

  if (!isServiceExists) {
    throw new AppError(httpStatus.NOT_FOUND, "This service not found");
  }

  const isSlotExists = await Slot.findByIdAndUpdate(
    bookingInfo.slot,
    { isBooked: "booked" },
    { new: true }
  );

  if (!isSlotExists) {
    throw new AppError(httpStatus.NOT_FOUND, "This slot not found");
  }

  const transactionId = `TXN-${Date.now()}`;

  const booking = {
    user: isCustomerExists?._id,
    service: bookingInfo?.service,
    slot: bookingInfo?.slot,
    totalPrice:bookingInfo?.price,
    status: 'Pending',
    paymentStatus: 'Pending',
    transactionId
  };

  await Booking.create(booking)

  // await booking.save()
  const paymentData = {
    transactionId,
    totalPrice:bookingInfo.price,
    customerName: userData.name,
    customerEmail: userData.email,
    customerPhone: userData.phone,
    customerAddress: userData.address
}

  const paymentSession = await initiatePayment(paymentData)

  // return (await (await result.populate("user")).populate("service")).populate(
  //   "slot"
  // );

  return {paymentSession}
};

const getAllBookingsFromDB = async () => {
  const result = await Booking.find()
    .populate("user")
    .populate("service")
    .populate("slot");

  return result;
};

const getMybookingIntoDB = async (email:string) => {
  const isUserExists = await User.findOne({ email });
  if (!isUserExists) {
    throw new AppError(httpStatus.NOT_FOUND, "User not found");
  }

  const result = await Booking.find({ user: isUserExists?._id })
    .populate("user")
    .populate("service")
    .populate("slot");

  return result;
};

export const BookingServices = {
  createBookingIntoDB,
  getAllBookingsFromDB,
  getMybookingIntoDB,
};
