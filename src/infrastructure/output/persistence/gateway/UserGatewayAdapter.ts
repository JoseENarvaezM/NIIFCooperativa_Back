import { UserGatewayIntPort } from "../../../../application/output/UserGatewayIntPort";
import prisma from "../../../../config/database";
import { UserEntity } from "../models/UserModel";

export class UserGatewayAdapter implements UserGatewayIntPort {

    async existByEmail(email: string): Promise<boolean> {
        const user = await prisma.user.findUnique({
            where: { email: email }
        });
        return user !== null;   
    }

    deleteUserById(id: string): Promise<void> {
        return prisma.user.delete({
            where: { id: id }
        }).then(() => {});
    }

    changeUserPassword(id: string, newPassword: string): Promise<void> {
        return prisma.user.update({
            where: { id: id },
            data: { password: newPassword }
        }).then(() => {});
    }

    createUser(user: User): Promise<User> {
        return prisma.user.create({
            data: {
                name: user.name,
                email: user.email,
                password: user.password,
                rol: user.rol
            }
        });
    }

    updateUser(id: string, user: User): Promise<User> {
        return prisma.user.update({
            where: { id: id },
            data: {
                name: user.name,
                email: user.email,
                password: user.password,
                rol: user.rol
            }
        });
    }

    listAdminUsers(role: string): Promise<User[]> {
        return prisma.user.findMany({
            where: { rol: role }
        });
    }

    listProfessorUsers(role: string): Promise<User[]> {
        return prisma.user.findMany({
            where: { rol: role }
        });
    }
}