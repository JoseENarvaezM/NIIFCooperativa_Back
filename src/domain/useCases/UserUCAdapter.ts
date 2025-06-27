import { UserUCIntPort } from "../../application/input/UserUCIntPort";
import { UserGatewayIntPort } from "../../application/output/UserGatewayIntPort";
import { ErrorFormatterIntPort } from "../../application/output/ErrorFormaterIntPort";
import { User } from "../../domain/models/UserModel";

export class UserUCAdapter implements UserUCIntPort {
    constructor(
        private userGateway: UserGatewayIntPort,
        private errorFormatter: ErrorFormatterIntPort

    ) { }
    //for all users    
    getUserById(id: string): Promise<User | null> {
        const user = this.userGateway.getUserById(id);
        if (user != null) {
            return user;
        }
        this.errorFormatter.errorExistsEntity(`User with id ${id} does not exist.`);
        return Promise.reject(new Error(`User with id ${id} does not exist.`));
    }
    deleteUserById(id: string): Promise<void> {
        if (this.deleteUserById(id) != null) {
            return this.userGateway.deleteUserById(id);
        }
        this.errorFormatter.errorExistsEntity(`User with id ${id} does not exist.`);
        return Promise.reject(new Error(`User with id ${id} does not exist.`));
    }

    changeUserPassword(id: string, newPassword: string): Promise<void> {
        if (this.changeUserPassword(id, newPassword) != null && newPassword.length >= 6) {
            return this.userGateway.changeUserPassword(id, newPassword);
        }
        this.errorFormatter.errorExistsEntity(`Invalid password or user with id ${id} does not exist.`);
        return Promise.reject(new Error(`Invalid password or user with id ${id} does not exist.`));
    }

    async createUser(user: User): Promise<User> {
        const exists = await this.userGateway.existByEmail(user.usuEmail);
        if (exists === true) {
            return this.userGateway.createUser(user);
        }
        this.errorFormatter.errorExistsEntity(`User with email ${user.usuEmail} dont exists.`);
        return Promise.reject(new Error(`User with email ${user.usuEmail} dont exists.`));
    }
    async updateUser(id: string, user: User): Promise<User> {
        const exist = await this.userGateway.existByEmail(user.usuEmail);
        if (this.updateUser(id, user) != null && exist === true) {
            return this.userGateway.updateUser(id, user);
        }
        this.errorFormatter.errorExistsEntity(`User with id ${user.usuEmail} does not exist.`);
        return Promise.reject(new Error(`User with id ${user.usuEmail} does not exist.`));
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