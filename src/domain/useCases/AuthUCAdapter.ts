import { AuthUCIntPort } from "../../application/input/AuthUCIntPort";
import { ErrorFormatterIntPort } from "../../application/output/ErrorFormaterIntPort";
import { UserGatewayIntPort } from "../../application/output/UserGatewayIntPort";
import { EncryptIntPort } from "../../application/output/EncryptIntPort";
import { AuthIntPort } from "../../application/output/AuthIntPort";
import { User } from "../models/UserModel";

export class AuthUCAdapter implements AuthUCIntPort {
    constructor(
        private userGateway: UserGatewayIntPort,
        private errorFormatter: ErrorFormatterIntPort,
        private Encrypt: EncryptIntPort,
        private TokenService: AuthIntPort
    ) { }

    async login(email: string, password: string): Promise<(Pick<User, "usuID" | "usuRole"> & { token: string }) | null> {
        const user = await this.userGateway.getUserByEmail(email);
        if (!user) {
            this.errorFormatter.genericError(`Credenciales incorrectas`);
            return null;
        }

        if (await this.Encrypt.comparePassword(password, user.usuPassword) === false) {
            this.errorFormatter.genericError("Credenciales incorrectas");
            return null;
        }

        const token = await this.TokenService.createAccessToken({usuID: user.usuID, usuRole: user.usuRole});
        
        return {
            usuID: user.usuID,
            usuRole: user.usuRole,
            token: token
        };
    }

    async verifyToken(token: string): Promise<any | null> {
        return this.TokenService.verifyAccessToken(token);
    }
}