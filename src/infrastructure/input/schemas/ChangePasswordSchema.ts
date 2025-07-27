import z from "zod";

export const ChangePasswordSchema = z.object({
  usuPassword: z.string().regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,20}$/, "La contraseña debe contener al menos una letra mayúscula, una letra minúscula, un número y un carácter especial"),
  usuOldPassword: z.string().regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,20}$/, "La contraseña debe contener al menos una letra mayúscula, una letra minúscula, un número y un carácter especial"),
});