import { Schema, model } from "mongoose";
import { ISlot } from "./slot.interface";

const slotSchema = new Schema<ISlot>(
  {
    service: {
      type: Schema.Types.ObjectId,
      required: true,
      // unique: true,
      ref: "Service",
    },
    date: {
      type: Date,
      required: true,
    },
    startTime: {
      type: String,
      required: true,
    },
    endTime: {
      type: String,
      required: true,
    },
    isBooked: {
      type: String,
      enum: ["available", "booked", "canceled"],
      required: true,
      default: 'available'
    },
  },
  {
    timestamps: true,
  }
);

const Slot = model<ISlot>("Slot", slotSchema);

export default Slot;
