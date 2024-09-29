import { Schema, model } from "mongoose";
import { IService } from "./service.interface";

const serviceSchema = new Schema<IService>(
  {
    name: {
      type: String,
      required: [true, "Service name is required"],
      trim: true, // Ensures no unnecessary spaces
    },
    description: {
      type: String,
      required: [true, "Description is required"],
      trim: true, // Ensures no unnecessary spaces
    },
    price: {
      type: Number,
      required: [true, "Price is required"],
      min: [0, "Price must be a positive number"], // Ensure price is not negative
    },
    duration: {
      type: Number,
      required: [true, "Duration is required"],
      min: [1, "Duration must be at least 1 minute"], // Ensure duration is at least 1 minute
    },
    image: {
      type: String,
      required: [true, "Image URL is required"],
      trim: true, // Ensures no unnecessary spaces
    },
    isDeleted: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true, // Automatically manages createdAt and updatedAt fields
  }
);

const Service = model<IService>("Service", serviceSchema);

export default Service;
