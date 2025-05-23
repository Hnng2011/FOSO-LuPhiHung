import { z } from "zod";

const profileSchema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Invalid email"),
  bio: z.string().max(160, "Bio is too long").optional(),
});

export { profileSchema };
