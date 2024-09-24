import { Types } from "mongoose";

export interface IReview {
    user: Types.ObjectId;
  rating: number;
  feedback: string;
}
