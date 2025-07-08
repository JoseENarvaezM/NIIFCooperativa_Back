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
        const user = this.userGateway.getUserById(id);
        if (user != null) {
            return user;
        }
        this.errorFormatter.errorNotFound(`User with id ${id} does not exist.`);
        return null;
    }

    async deleteUserById(id: string): Promise<void> {
    const user = await this.userGateway.getUserById(id);

    if (user != null) {
        await this.userGateway.deleteUserById(id);
        return;
    }
    this.errorFormatter.errorNotFound(`User with id ${id} does not exist.`);
}

    async changeUserPassword(id: string, newPassword: string): Promise<void> {
        const user = await this.userGateway.getUserById(id);
        if (user != null) {
            await this.userGateway.changeUserPassword(id, newPassword);
            return;
        }
        this.errorFormatter.errorNotFound(`Invalid password or user with id ${id} does not exist.`);
    }   

    async createUser(user: User): Promise<User| null> {
        const exists = await this.userGateway.existByEmail(user.usuEmail);
        if (exists === false) {
            user.usuPassword = await Encrypt.hashPassword(user.usuPassword);
            return this.userGateway.createUser(user);
        }
        this.errorFormatter.errorExistsEntity(`User with email ${user.usuEmail} already exists.`);
        return null;
    }
    async updateUser(id: string, user: User): Promise<User| null> {
        const exist = await this.userGateway.existByEmail(user.usuEmail);
        if (this.updateUser(id, user) != null && exist === false) {
            user.usuPassword = await Encrypt.hashPassword(user.usuPassword);
            return this.userGateway.updateUser(id, user);
        }
        this.errorFormatter.errorExistsEntity(`User with id ${user.usuEmail} already exist.`);
        return null;
    }
    //admin only
    listAdminUsers(role: string): Promise<User[]> {
        if (role === 'admin') {
            return this.userGateway.listAdminUsers(role);
        }
        throw new Error(`User with role ${role} is not an admin.`);
    }

    //professor only
    listProfessorUsers(role: string): Promise<User[]> {
        if (role === 'profesor') {
            return this.userGateway.listProfessorUsers(role);
        }
        throw new Error(`User with role ${role} is not a professor.`);
    }

}