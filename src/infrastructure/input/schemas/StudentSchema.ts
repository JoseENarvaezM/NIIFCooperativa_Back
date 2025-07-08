import { z, ZodType } from "zod";
import { RoomSchema } from "./RoomSchema";

const ReportSchema = z.any();

// 👇 Aquí definimos el tipo de retorno explícitamente
export const getStudentSchema = (): ZodType => {
  return z.object({
    stuID: z.string(),
    stuCedula: z.string(),
    roomID: z.string(),
    room: z.lazy(() => RoomSchema).optional(),
    report: z.array(ReportSchema).default([]),
  });
};
