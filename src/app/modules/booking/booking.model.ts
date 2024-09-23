import { Schema, model } from "mongoose";
import { IBooking } from "./booking.interface";

// Define the Customer schema separately
const customerSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    // validate: {
    //   validator: (v: string) => /\S+@\S+\.\S+/.test(v), // simple email validation
    //   message: (props: any) => `${props.value} is not a valid email!`,
    // },
  },
  phone: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
});

// Define the Booking schema
const bookingSchema = new Schema<IBooking>(
  {
    user: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    service: {
      type:Schema.Types.ObjectId,
      ref:"Service",
      required: true
    },
    slot: {
      type: Schema.Types.ObjectId,
      ref: "Slot",
      required: true,
    },
    totalPrice: {
      type: Number,
      required: true,
    },
    status: {
      type: String,
      enum: ["Pending", "Paid", "Shipped", "Completed", "Cancelled"],
      default: "Pending",
    },
    paymentStatus: {
      type: String,
      enum: ["Pending", "Paid", "Failed"],
      default: "Pending",
    },
    transactionId: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Booking = model<IBooking>("Booking", bookingSchema);

export default Booking;
