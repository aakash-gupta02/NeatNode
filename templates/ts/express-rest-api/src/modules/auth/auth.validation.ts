import { z } from "zod";

export const registerInput = z
  .object({
    name: z.string().trim().min(2).max(60),
    email: z.email().transform((val) => val.toLowerCase()),
    password: z.string().min(6).max(100),
  })
  .strict();

export const loginInput = z
  .object({
    email: z.email().transform((val) => val.toLowerCase()),
    password: z.string().min(6).max(100),
  })
  .strict();

export type RegisterInput = z.infer<typeof registerInput>;
export type LoginInput = z.infer<typeof loginInput>;