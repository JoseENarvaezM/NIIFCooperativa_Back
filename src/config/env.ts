import dotenv from "dotenv";

dotenv.config();
export const env = {
  jwtSecret: process.env.JWT_SECRET || "default_secret_key",
};
