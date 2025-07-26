import { User } from "../../domain/models/UserModel";

export interface AuthUCIntPort {
    login(email: string, password: string): Promise<(Pick<User, "usuID" | "usuRole"> & { token: string }) | null>;
    verifyToken(token: string): Promise<any | null>;
}
