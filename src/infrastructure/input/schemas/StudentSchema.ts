import { z } from "zod";
import { RoomSchema } from "./RoomSchema";

const ReportSchema = z.any();

// 👇 Aquí definimos el tipo de retorno explícitamente
export const StudentSchema = z.object({
    stuCedula: z.string().min(6, "Cédula debe tener minimo 6 caracteres").max(10, "Cédula debe tener máximo 10 caracteres"),
    roomID: z.string().optional(),
    room: z.lazy(() => RoomSchema).optional(),
    report: z.array(ReportSchema).optional(),
});
 