import { z } from "zod";

export const UserFormValidation = z.object({
    name: z.string()
        .min(2, "Name must be at least 2 characters.")
        .max(50, "Name must be at least 2 characters."),
    email: z.string().email("Invalid email address."),
    phone: z.string().refine( (phone) => 
        /^(\+49|0)?( ?\d{3,5})?( ?\d{3,4})?( ?\d{4})$/
        .test(phone), 'Invalid phone number.')
  });