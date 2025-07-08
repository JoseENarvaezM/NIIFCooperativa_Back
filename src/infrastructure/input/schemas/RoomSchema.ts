import { z } from "zod";
import { getStudentSchema } from "./StudentSchema";
import { userSchema } from "./UserSchema";

const ReportSchema = z.any();

export const RoomSchema = z.object({
  roomID: z.string(),
  roomName: z.string(),
  roomPassword: z.string(),
  roomDate: z.coerce.date(),
  roomStatus: z.enum(['open', 'closed']),
  roomAnswer: z.any(),
  usuID: z.string(),
  user: userSchema.optional(),
  report: z.array(ReportSchema).default([]),
  student: z.array(z.lazy(() => getStudentSchema())).default([]),
});
