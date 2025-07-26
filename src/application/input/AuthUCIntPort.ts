import { User } from "../../domain/models/UserModel";

export interface AuthUCIntPort {
    login(email: string, password: string): Promise<(Pick<User, "usuID" | "usuRole"> & { token: string }) | null>;
    logout(token: string): Promise<void>;
    verifyToken(token: string): Promise<any | null>;
}
