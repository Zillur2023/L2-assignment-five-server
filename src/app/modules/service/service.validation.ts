import { z } from "zod";

const createServiceValidationSchema = z.object({
  body: z.object({
    name: z.string({ invalid_type_error: "Service name is required" }),
    description: z.string({ invalid_type_error: "Description is required" }),
    price: z
      .number({ invalid_type_error: "Price must be a number" })
      .nonnegative({ message: "Price must be a non-negative number" }),
    duration: z
      .number({ invalid_type_error: "Duration must be a number" })
      .positive({ message: "Duration must be a positive number" }),
    isDeleted: z.boolean().default(false),
  }),
});
const updateServiceValidationSchema = z.object({
  body: z.object({
    name: z
      .string({ invalid_type_error: "Service name is required" })
      .optional(),
    description: z
      .string({ invalid_type_error: "Description is required" })
      .optional(),
    price: z
      .number({ invalid_type_error: "Price must be a number" })
      .nonnegative({ message: "Price must be a non-negative number" })
      .optional(),
    duration: z
      .number({ invalid_type_error: "Duration must be a number" })
      .positive({ message: "Duration must be a positive number" })
      .optional(),
    isDeleted: z.boolean().default(false),
  }),
});

export const serviceValidations = {
  createServiceValidationSchema,
  updateServiceValidationSchema,
};
