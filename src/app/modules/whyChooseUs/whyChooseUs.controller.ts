import httpStatus from "http-status";
import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import { WhyChooseUsServices } from "./whyChooseUs.service";


const getAllWhyChooseUs = catchAsync(async (req, res) => {
    const result = await WhyChooseUsServices.getAllWhyChooseUsFromDB();
    console.log({result})
  
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Get all whyChooseUs successfully',
      data: result,
    });
  });

  export const  WhyChooseUsControllers = {
    getAllWhyChooseUs
  }