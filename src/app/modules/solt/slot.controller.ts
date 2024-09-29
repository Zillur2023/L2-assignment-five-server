import httpStatus from "http-status";
import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import { SlotServices } from "./slot.service";


const createSlot = catchAsync( async (req, res) => {
    const result = await SlotServices.createSlotIntoDB(req.body)

    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: "Slots create successfully",
        data: result,
      });
} )
const getAllSlots = catchAsync( async (req, res) => {
    const result = await SlotServices.getAllSlotsFromDB()

    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: "Get all slots successfully",
        data: result,
      });
} )

const availableSlot = catchAsync( async (req, res) => {
  const {service} = req.params
  const result = await SlotServices.availableIntoDB( service )

    sendResponse(res, {
      success: true,
      statusCode: httpStatus.OK,
      message:  "Available slots retrieved successfully",
      data: result,
    });
    
} )

const updateSlot = catchAsync(async (req, res) => {
  // console.log('updateSlot', req.body)
  const result = await SlotServices.updateSlotIntoDB(req.body);
  // console.log('updateSlot', result)

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Slot is updated successfully',
    data: result,
  });
});

export const SlotControllers = {
     createSlot,
     getAllSlots,
     availableSlot,
     updateSlot
}