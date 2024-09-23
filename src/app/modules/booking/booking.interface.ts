import { Types } from "mongoose";


export interface IBooking {
  user: Types.ObjectId;
  service: Types.ObjectId;
  slot: Types.ObjectId;
  totalPrice: number;
  status: 'Pending' | 'Paid' | 'Shipped' | 'Completed' | 'Cancelled';
  paymentStatus: 'Pending' | 'Paid' | 'Failed';
  transactionId: string;
}
