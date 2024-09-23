import { Types } from "mongoose";


type SlotStatus = 'available' | 'booked' | 'canceled';

export interface ISlot  {
  service: Types.ObjectId;
  date: Date;
  startTime: string;
  endTime: string;
  isBooked: SlotStatus;
}
 
export interface IAvailableSlot {
  date?: string;
  serviceId?: Types.ObjectId
}

