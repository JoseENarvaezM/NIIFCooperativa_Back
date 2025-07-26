import { UserGatewayIntPort } from "../../../../application/output/UserGatewayIntPort";
import prisma from "../../../../config/database";
import { User } from "../../../../domain/models/UserModel";

export class UserGatewayAdapter implements UserGatewayIntPort {

    async getUserById(id: string): Promise<User | null> {
        const userData = await prisma.user.findUnique({
            where: { usuID: id }
        });
        if (!userData) return null;
        return new User(
            userData.usuID,
            userData.usuName,
            userData.usuEmail,
            "",
            userData.usuRole,
            [] 
        );
    }

    async existByEmail(email: string): Promise<boolean> {
        const user = await prisma.user.findUnique({
            where: { usuEmail: email }
        });
        return user !== null;
    }

    async getUserByEmail(email: string): Promise<User | null> {
        const userData = await prisma.user.findUnique({
            where: { usuEmail: email }
        });
        if (!userData) return null;
        return new User(
            userData.usuID,
            userData.usuName,
            userData.usuEmail,
            userData.usuPassword,
            userData.usuRole,
            [] 
        );
    }

    async deleteUserById(id: string): Promise<void> {
        const user = await prisma.user.findUnique({
            where: { usuID: id }
        });
        if (!user) {
            throw new Error(`User with ID ${id} does not exist.`);
        }
        await prisma.user.delete({
            where: { usuID: id }
        });
    }

    async changeUserPassword(id: string, newPassword: string): Promise<void> {
        const user = await prisma.user.findUnique({
            where: { usuID: id }
        });
        if (!user) {
            throw new Error(`User with ID ${id} does not exist.`);
        }
        await prisma.user.update({
            where: { usuID: id },
            data: { usuPassword: newPassword }
        });
    }

    async createUser(user: User): Promise<User> {
        const newUserData = await prisma.user.create({
            data: {
                usuName: user.usuName,
                usuEmail: user.usuEmail,
                usuPassword: user.usuPassword,
                usuRole: user.usuRole
            }
        });
        return new User(
            newUserData.usuID,
            newUserData.usuName,
            newUserData.usuEmail,
            "",
            newUserData.usuRole,
            [] 
        );
    }


    async updateUser(id: string, user: User): Promise<User> {
        const updatedUserData = await prisma.user.update({
            where: { usuID: id },
            data: {
                usuName: user.usuName,
                usuEmail: user.usuEmail,
                usuPassword: user.usuPassword,
                usuRole: user.usuRole
            }
        });
        return new User(
            updatedUserData.usuID,
            updatedUserData.usuName,
            updatedUserData.usuEmail,
            "",
            updatedUserData.usuRole,
            [] 
        );
    }


    async listProfessorUsers(role: 'admin' | 'profesor'): Promise<User[]> {
        const usersData = await prisma.user.findMany({
            where: { usuRole: role }
        });
        return usersData.map(userData => new User(
            userData.usuID,
            userData.usuName,
            userData.usuEmail,
            "",
            userData.usuRole,
            [] 
        ));
    }
}