import httpStatus from "http-status";
import AppError from "../../errors/AppError";
import { IReview } from "./review.interface"
import Review from "./review.model"


const createReviewIntoDB = async (payload:IReview) => {
    const { user,rating, feedback} = payload;
    console.log({payload})

    // if ( !user || !rating || !feedback) {
    //   throw new AppError(httpStatus.BAD_REQUEST,"Rating and feedback are required")
    // }
    const result = await Review.create(payload)
    
    return result
}
const getAllReviewsFromDB = async () => {
    const result = await Review.find()
    
    return result
}

export const ReviewServices = {
    createReviewIntoDB,
    getAllReviewsFromDB
}