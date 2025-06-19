import { User } from "../input/UserUCIntPort";

export interface UserGatewayIntPort {
    //for all users 
    listUsers(): Promise<User[]>;
    deleteUserById(id: string): Promise<void>;
    changeUserPassword(id: string, newPassword: string): Promise<void>;
    //admin only
    listAdminUsers(role: string): Promise<User[]>;
    createAdminUser(role:string, user: User): Promise<User>;
    updateAdminUser(id: string, user: User): Promise<User>;
    //professor only
    listProfessorUsers(role: string): Promise<User[]>;
    createProfessorUser(role:string ,user: User): Promise<User>;
    updateProfessorUser(id: string, user: User): Promise<User>;
}
