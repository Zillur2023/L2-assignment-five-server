

import { Schema, model } from "mongoose";
import { IWhyChooseUs } from "./whyChooseUs.interface";

const whyChooseUsSchema = new Schema<IWhyChooseUs>(
  {
    image: {
      type: String,
    },
    title: {
      type: String,
      required: true,
    },
    description:{
        type: String,
        required:true,
    }
   
  },
  {
    timestamps: true,
  }
);

const WhyChooseUs = model<IWhyChooseUs>("WhyChooseUs", whyChooseUsSchema);

export default WhyChooseUs;
