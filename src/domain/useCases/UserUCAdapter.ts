import { User, UserUCIntPort } from "../../application/input/UserUCIntPort";
import { UserGatewayIntPort } from "../../application/output/UserGatewayIntPort";
import { ErrorFormatterIntPort } from "../../application/output/errorFormaterIntPort";
import { ExistByEmail } from "../../application/output/ExistByEmail";
import { promise } from "zod";

export class UserUCAdapter implements UserUCIntPort {
    constructor(
        private userGateway: UserGatewayIntPort,
        private errorFormatter: ErrorFormatterIntPort

    ) { }
    //for all users    
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
    existByEmail(email: string): Promise<boolean> {
        if (email && email.includes('@')) {
            return this.existByEmail(email);
        }
        this.errorFormatter.errorExistsEntity(`Invalid email format: ${email}`);
        return Promise.reject(new Error(`Invalid email format: ${email}`));
    }

    async createUser(user: User): Promise<User> {
        const exists = await this.existByEmail(user.email);
        if (exists === true) {
            return this.userGateway.createUser(user);
        }
        this.errorFormatter.errorExistsEntity(`User with email ${user.email} dont exists.`);
        return Promise.reject(new Error(`User with email ${user.email} dont exists.`));
    }
    async updateUser(id: string, user: User): Promise<User> {
        const exist = await this.existByEmail(user.email);
        if (this.updateUser(id, user) != null && exist === true) {
            return this.userGateway.updateUser(id, user);
        }
        this.errorFormatter.errorExistsEntity(`User with id ${user.email} does not exist.`);
        return Promise.reject(new Error(`User with id ${user.email} does not exist.`));
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
        if (role === 'professor') {
            return this.userGateway.listProfessorUsers(role);
        }
        throw new Error(`User with role ${role} is not a professor.`);
    }

}