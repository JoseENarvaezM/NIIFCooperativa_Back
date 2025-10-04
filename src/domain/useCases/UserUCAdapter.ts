import { UserUCIntPort } from "../../application/input/UserUCIntPort";
import { UserGatewayIntPort } from "../../application/output/UserGatewayIntPort";
import { ErrorFormatterIntPort } from "../../application/output/ErrorFormaterIntPort";
import { User } from "../../domain/models/UserModel";
import { Encrypt } from "./SecurityUtils/Encrypt";

export class UserUCAdapter implements UserUCIntPort {
    constructor(
        private userGateway: UserGatewayIntPort,
        private errorFormatter: ErrorFormatterIntPort

    ) { }
    
    async getUserById(id: string): Promise<User | null> {
        const user = await this.userGateway.getUserById(id);

        if (user != null) {
            user.usuPassword = "";
            return user;
        }
        this.errorFormatter.errorNotFound(`Usuario con id ${id} no existe.`);
        return null;
    }

    async deleteUserById(id: string): Promise<void> {
    const user = await this.userGateway.getUserById(id);

    if (user != null) {
        await this.userGateway.deleteUserById(id);
        return;
    }
    this.errorFormatter.errorNotFound(`Usuario con id ${id} no existe.`);
}

    async changeUserPassword(id: string, newPassword: string,usuOldPassword: string): Promise<void> {
        const user = await this.userGateway.getUserById(id);
        if (!user) {
            this.errorFormatter.errorNotFound(`Usuario con id ${id} no existe.`);
            return;
        }

        const passwordsMatch = await Encrypt.comparePassword(usuOldPassword, user.usuPassword);

        console.log("Passwords match:", passwordsMatch); 

        if (passwordsMatch) {
            user.usuPassword = await Encrypt.hashPassword(newPassword);
            await this.userGateway.updateUser(id, user);
            return;
        }
        this.errorFormatter.genericError("La contraseña vieja es incorrecta.");
    }   

    async createUser(user: User): Promise<User| null> {
        const exists = await this.userGateway.existByEmail(user.usuEmail);
        if (exists === false) {
            user.usuPassword = await Encrypt.hashPassword(user.usuPassword);
            return this.userGateway.createUser(user);
        }
        this.errorFormatter.errorExistsEntity(`Usuario con email ${user.usuEmail} ya existe.`);
        return null;
    }
    async updateUser(id: string, user: User): Promise<User| null> {
        const data = await this.userGateway.getUserById(id);
        if (!data) {
            this.errorFormatter.errorNotFound(`Usuario con id ${id} no existe.`);
            return null;
        }
        if (data.usuEmail !== user.usuEmail) {
            const exists = await this.userGateway.existByEmail(user.usuEmail);
            if (exists) {
                this.errorFormatter.errorExistsEntity(`Usuario con email ${user.usuEmail} ya existe.`);
                return null;
            }
        }
        if (user.usuPassword) {
            user.usuPassword = await Encrypt.hashPassword(user.usuPassword);
        }else {
            user.usuPassword = data.usuPassword;
        }
        return this.userGateway.updateUser(id, user);
    }

    //professor only
    listProfessorUsers(role: string): Promise<User[]> {
        if (role === 'professor') {
            return this.userGateway.listProfessorUsers(role);
        }
        throw new Error(`Usuario con rol ${role} no es un profesor.`);
    }

}