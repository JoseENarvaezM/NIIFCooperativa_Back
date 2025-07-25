import { AuthUCIntPort } from "../../application/input/AuthUCIntPort";
import { ErrorFormatterIntPort } from "../../application/output/ErrorFormaterIntPort";
import { TokenService } from "./SecurityUtils/TokenService";
import { UserGatewayIntPort } from "../../application/output/UserGatewayIntPort";
import { Encrypt } from "./SecurityUtils/Encrypt";

import { User } from "../models/UserModel";

export class AuthUCAdapter implements AuthUCIntPort {
    constructor(
        private userGateway: UserGatewayIntPort,
        private errorFormatter: ErrorFormatterIntPort
    ) { }

    async login(email: string, password: string): Promise<(Pick<User, "usuID" | "usuRole"> & { token: string }) | null> {
        const user = await this.userGateway.getUserByEmail(email);
        if (!user) {
            this.errorFormatter.errorNotFound(`User with email ${email} does not exist.`);
            return null;
        }

        if (await Encrypt.comparePassword(password, user.usuPassword) === false) {
            this.errorFormatter.errorExistsEntity("Invalid password.");
            return null;
        }

        const token = await TokenService.createAccessToken({usuID: user.usuID, usuRol: user.usuRole});
        
        return {
            usuID: user.usuID,
            usuRole: user.usuRole,
            token: token
        };
    }

    async logout(token: string): Promise<void> {
        console.log(`Token ${token} logged out (no action needed in stateless JWT).`);
    }
    async verifyToken(token: string): Promise<any | null> {
        return TokenService.verifyAccessToken(token);
    }
}