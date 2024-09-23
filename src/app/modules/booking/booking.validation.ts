// import { z } from "zod";
// import { VehicleTypes } from "./booking.interface";



// const createBookingValidationSchema = z.object({
//   body: z.object({
//     serviceId: z.string({ invalid_type_error: "Service ID is required" }),
//     slotId: z.string({ invalid_type_error: "Slot ID is required" }),
//     vehicleType: z.enum(VehicleTypes, { invalid_type_error: "Invalid vehicle type" }),
//     vehicleBrand: z.string({ invalid_type_error: "Vehicle brand is required" }),
//     vehicleModel: z.string({ invalid_type_error: "Vehicle model is required" }),
//     manufacturingYear: z.number({ invalid_type_error: "Manufacturing year is required" })
//       .int()
//       .min(1886, { message: "Manufacturing year must be after the invention of the modern car" }),
//     registrationPlate: z.string({ invalid_type_error: "Registration plate is required" }),
//   }),
// });

// export const bookingValidations = {
//   createBookingValidationSchema,
// };
