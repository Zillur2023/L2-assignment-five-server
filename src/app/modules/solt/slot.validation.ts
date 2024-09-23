import { z } from "zod";

const createSlotValidationSchema = z.object({
  body: z.object({
    service: z
      .string({ invalid_type_error: "Service ID is required" }),
    //   .regex(/^[0-9a-fA-F]{24}$/, "Invalid Service ID"),
    date: z
      .string({ invalid_type_error: "Date is required" })
      .refine((val) => !isNaN(Date.parse(val)), {
        message: "Invalid date format",
      }),
    startTime: z
      .string({ invalid_type_error: "starttime is required" })
      .regex(/^([0-1]?[0-9]|2[0-3]):[0-0][0-0]$/, "Invalid starttime format"),
    endTime: z
      .string({ invalid_type_error: "endtime is required" })
      .regex(/^([0-1]?[0-9]|2[0-3]):[0-0][0-0]$/, "Invalid endtime format"),
    isBooked: z.enum(["available", "booked", "canceled"], {
      invalid_type_error: "Invalid isBooked ",
    }).default('available'),
  }),
});

export const slotValidations = {
  createSlotValidationSchema,
};
