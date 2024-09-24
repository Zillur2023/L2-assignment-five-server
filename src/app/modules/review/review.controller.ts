import httpStatus from "http-status";
import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import { ReviewServices } from "./review.service";


const getAllReviews = catchAsync( async (req, res) => {
    const result = await ReviewServices.getAllReviews()

    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: "Get all reviews successfully",
        data: result,
      });
} )

export const ReviewControllers = {
    getAllReviews
}