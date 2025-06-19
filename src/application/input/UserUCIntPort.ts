export interface User {
    id: string;
    name: string;
    email: string;
    password: string;
    rol: string; // e.g., 'admin', 'professor', 'user', etc. 
}
export interface UserUCIntPort {
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