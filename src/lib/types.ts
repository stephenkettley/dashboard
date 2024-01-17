import { z } from "zod";

export const addDriverSchema = z.object({
    firstName: z.string().min(1, "*First name is required"),
    lastName: z.string().min(1, "*First name is required"),
    phoneNumber: z
      .string()
      .max(10, "*Please enter a 10-digit phone number.")
      .min(10, "*Please enter a 10-digit phone number."),
    idNumber: z
      .string()
      .max(13, "*Please enter a 13-digit ID number.")
      .min(13, "*Please enter a 13-digit ID number."),
  });
  
export type TAddDriverSchema = z.infer<typeof addDriverSchema>;
  

export const addVehicleSchema = z.object({
  regNumber: z.string().min(6, "*Please enter a valid registration number"),
  colour: z.string().min(1, "*Colour is required"),
  make: z.string().min(1, "*Make is required"),
  model: z.string().min(1, "*Model is required"),
});

export type TAddVehicleSchema = z.infer<typeof addVehicleSchema>;