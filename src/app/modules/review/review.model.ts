import mongoose from "mongoose";
import { IReview } from "./review.interface";

const reviewSchema = new mongoose.Schema<IReview>({
  rating: {
    type: Number,
    required: true,
    min: 1,
    max: 5,
  },
  feedback: {
    type: String,
    required: true,
    trim: true,
  },

},
  {
    timestamps: true,
  });

 const  Review = mongoose.model<IReview>('Review', reviewSchema);

export default Review
