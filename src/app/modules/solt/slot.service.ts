import httpStatus from "http-status";
import AppError from "../../errors/AppError";
import Service from "../service/service.model";
import Slot from "./slot.model";
// import { formatDate } from "./slot.utils";
import {  ISlot } from "./slot.interface";

const createSlotIntoDB = async (payload: ISlot) => {
  // const slotData: ISlot[] = await Slot.find({ service: payload.service, date: payload.date });

  // Fetch service duration
  const serviceData = await Service.findById(payload.service);
  // console.log({serviceData})
  if (!serviceData) {
    throw new AppError(httpStatus.NOT_FOUND, "This service not found");
  }

  const duration = serviceData.duration; // Assume duration is in minutes

  // Convert times to minutes
  const start =
    parseInt(payload.startTime.split(":")[0]) * 60 +
    parseInt(payload.startTime.split(":")[1]);
  const end =
    parseInt(payload.endTime.split(":")[0]) * 60 +
    parseInt(payload.endTime.split(":")[1]);
  // const end = start + duration
  const totalDuration = end - start;
  // if (!(end > start)) {
  //   throw new Error("End time must geater than Start time");
  // }
 

  // eslint-disable-next-line @typescript-eslint/no-explicit-any, prefer-const
  let result: any = [];
  for (
    let i = 0;
    i < parseInt((totalDuration / duration).toString(), 10);
    i++
  ) {
    const slotStart = start + i * duration;
    const slotEnd = slotStart + duration;

    const slot = await Slot.create({
      service:payload.service,
      date: payload.date,
      startTime: `${Math.floor(slotStart / 60)
        .toString()
        .padStart(2, "0")}:${(slotStart % 60).toString().padStart(2, "0")}`,
      endTime: `${Math.floor(slotEnd / 60)
        .toString()
        .padStart(2, "0")}:${(slotEnd % 60).toString().padStart(2, "0")}`,
      isBooked: "available",
    });

    result.push(slot);
  }

  // return result;
};

const getAllSlotsFromDB = async () => {
  const result = Slot.find();

  return result;
};

// const availableIntoDB = async ( payload: Record<string, string> ) => {
const availableIntoDB = async (service: string) => {
  const result = await Slot.find({ service });

  return result;
};

const updateSlotIntoDB = async (payload: Record<string, unknown>) => {
  const service = await Slot.findByIdAndUpdate(
    payload._id,
    payload, 
    { new: true, runValidators: true }
  );
  if (!service) {
    throw new AppError(httpStatus.NOT_FOUND, "Slot not found");
  }

  return service;
};

export const SlotServices = {
  createSlotIntoDB,
  getAllSlotsFromDB,
  availableIntoDB,
  updateSlotIntoDB,
};
