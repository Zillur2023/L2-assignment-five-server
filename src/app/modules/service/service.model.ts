import { Schema, model } from "mongoose";
import { IService } from "./service.interface";

const serviceSchema = new Schema<IService>(
  {
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    duration: {
      type: Number,
      required: true,
    },
    image: {
      type: String,
      required:true
    },
    isDeleted: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

const Service = model<IService>("Service", serviceSchema);

export default Service;
