import { z } from "zod";

export const userSchema = z.object({
    usuName: z.string().min(1, "nombre de usuario requerido"),
    usuEmail: z.string().email("Correo inválido"),
    usuPassword: z.string().regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,20}$/, "La contraseña debe contener al menos una letra mayúscula, una letra minúscula, un número y un carácter especial")
});
export const UserEditSchema = z.object({
    usuName: z.string().min(1, "nombre de usuario requerido"),
    usuEmail: z.string().email("Correo inválido"),
    usuPassword: z.string().optional()
});