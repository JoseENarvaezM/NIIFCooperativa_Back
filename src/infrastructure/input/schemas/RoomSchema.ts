import { z } from "zod";

export const RoomSchema = z.object({
  roomName: z.string().min(1, "Se requiere un nombre"),
  roomPassword: z.string().min(1, "Se requiere una contraseña"),
  usuID: z.string().optional(),
});

export type RoomSchemaModel = z.infer<typeof RoomSchema>;

