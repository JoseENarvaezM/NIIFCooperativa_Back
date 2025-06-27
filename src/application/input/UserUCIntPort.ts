import { User } from '../../domain/models/UserModel';

export interface UserUCIntPort {
    //for all users 
    getUserById(id: string): Promise<User | null>;
    deleteUserById(id: string): Promise<void>;
    changeUserPassword(id: string, newPassword: string): Promise<void>;
    createUser(user: User): Promise<User>;
    updateUser(id: string, user: User): Promise<User>;
    //admin only
    listAdminUsers(role: string): Promise<User[]>;
    //professor only
    listProfessorUsers(role: string): Promise<User[]>;
}