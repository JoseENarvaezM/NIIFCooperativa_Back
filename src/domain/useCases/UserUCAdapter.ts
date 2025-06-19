import { User, UserUCIntPort } from "../../application/input/UserUCIntPort";
import { UserGatewayIntPort } from "../../application/output/UserGatewayIntPort";

export class UserUCAdapter implements UserUCIntPort {
    constructor(
        private userGateway: UserGatewayIntPort
    ) { }
    //for all users    
    listUsers(): Promise<User[]> {
        return this.userGateway.listUsers();
    }

    deleteUserById(id: string): Promise<void> {
        if (this.deleteUserById(id) != null) {
            return this.userGateway.deleteUserById(id);
        }
        throw new Error(`User with id ${id} does not exist.`);

    }

    changeUserPassword(id: string, newPassword: string): Promise<void> {
        if (this.changeUserPassword(id, newPassword) != null && newPassword.length >= 6) {
            return this.userGateway.changeUserPassword(id, newPassword);
        }
        throw new Error(`User with id ${id} does not exist.`);
    }
    //admin only
    listAdminUsers(role: string): Promise<User[]> {
        if (role === 'admin') {
            return this.userGateway.listAdminUsers(role);
        }
        throw new Error(`User with role ${role} is not an admin.`);
    }

    createAdminUser(role:string, user: User): Promise<User> {
        if (role === 'admin') {
            return this.userGateway.createAdminUser(role, user);
        }
        throw new Error(`User with role ${role} is not an admin.`);
    }

    updateAdminUser(id: string, user: User): Promise<User> {
        if (this.updateAdminUser(id, user) != null) {
            return this.userGateway.updateAdminUser(id, user);
        }
        throw new Error(`User with id ${id} does not exist.`);
    }
    //professor only
    listProfessorUsers(role: string): Promise<User[]> {
        if (role === 'professor') {
            return this.userGateway.listProfessorUsers(role);
        }
        throw new Error(`User with role ${role} is not a professor.`);
    }

    createProfessorUser(role:string , user: User): Promise<User> {
        if (role === 'professor') {
            return this.userGateway.createProfessorUser(role, user);
        }
        throw new Error(`User with role ${role} is not a professor.`);  
    }

    updateProfessorUser(id: string, user: User): Promise<User> {
        if (this.updateProfessorUser(id, user) != null) {
            return this.userGateway.updateProfessorUser(id, user);
        }
        throw new Error(`User with id ${id} does not exist.`);
    }
}