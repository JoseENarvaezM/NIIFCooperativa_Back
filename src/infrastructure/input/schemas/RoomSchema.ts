import { z } from "zod";

export const RoomSchema = z.object({
  roomName: z.string().min(1, "Se requiere un nombre"),
  roomPassword: z.string().min(1, "Se requiere una contraseña"),
  usuID: z.string().optional(),
});

export type RoomSchemaModel = z.infer<typeof RoomSchema>;

//TODO: mirar si se necesita si no borrar
export const Id = z.object({
    roomID: z.string({
        required_error: "Se requiere una id de sala",
    })
});
//TODO: mirar si se necesita si no borrar
export const usuId = z.object({
    usuID: z.string({
        required_error: "Se requiere una id de sala",
    })
});
//TODO: mirar si se necesita si no borrar
export const Date = z.object({
    roomDate: z.string({
        required_error: "Se requiere un año",
    })
});
//TODO: mirar si se necesita si no borrar, Creo que s epuede hacer por parametros
export const updateRoomState = z.object({
    roomStatus: z.string({
        required_error: "Se requiere un estado",
    }),
})
//TODO: mirar si se necesita si no borrar
export const updateRoomName = z.object({
    roomName: z.string({
        required_error: "Se requiere un nombre",
    }),
    roomPassword: z.string({
        required_error: "Se requiere una contraseña",
    }),
})