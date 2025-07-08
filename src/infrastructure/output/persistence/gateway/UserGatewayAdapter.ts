import { UserGatewayIntPort } from "../../../../application/output/UserGatewayIntPort";
import prisma from "../../../../config/database";
import { User } from "../../../../domain/models/UserModel";

export class UserGatewayAdapter implements UserGatewayIntPort {

    async getUserById(id: string): Promise<User | null> {
        const userData = await prisma.user.findUnique({
            where: { usuID: id }
        });
        if (!userData) return null;
        // Assuming you want to fetch rooms as well, otherwise pass empty array
        return new User(
            userData.usuID,
            userData.usuName,
            userData.usuEmail,
            userData.usuPassword,
            userData.usuRole,
            [] // or fetch and map rooms if needed
        );
    }

    async existByEmail(email: string): Promise<boolean> {
        const user = await prisma.user.findUnique({
            where: { usuEmail: email }
        });
        return user !== null;
    }

    deleteUserById(id: string): Promise<void> {
        return prisma.user.delete({
            where: { usuID: id }
        }).then(() => { });
    }

    changeUserPassword(id: string, newPassword: string): Promise<void> {
        return prisma.user.update({
            where: { usuID: id },
            data: { usuPassword: newPassword }
        }).then(() => { });
    }

    createUser(user: User): Promise<User> {
        return prisma.user.create({
            data: {
                usuName: user.usuName,
                usuEmail: user.usuEmail,
                usuPassword: user.usuPassword,
                usuRole: user.usuRole
            }
        }).then(userData => new User(
            userData.usuID,
            userData.usuName,
            userData.usuEmail,
            userData.usuPassword,
            userData.usuRole,
            [] // or fetch and map rooms if needed
        ));
    }


    updateUser(id: string, user: User): Promise<User> {
        return prisma.user.update({
            where: { usuID: id },
            data: {
                usuName: user.usuName,
                usuEmail: user.usuEmail,
                usuPassword: user.usuPassword,
                usuRole: user.usuRole
            }
        }).then(userData => new User(
            userData.usuID,
            userData.usuName,
            userData.usuEmail,
            userData.usuPassword,
            userData.usuRole,
            [] // or fetch and map rooms if needed
        ));
    }

    listAdminUsers(role: 'admin' | 'profesor'): Promise<User[]> {
        return prisma.user.findMany({
            where: { usuRole: role }
        }).then(users =>
            users.map(userData =>
                new User(
                    userData.usuID,
                    userData.usuName,
                    userData.usuEmail,
                    userData.usuPassword,
                    userData.usuRole,
                    [] // or fetch and map rooms if needed
                )
            )
        );
    }

    listProfessorUsers(role: 'admin' | 'profesor'): Promise<User[]> {
        return prisma.user.findMany({
            where: { usuRole: role }
        }).then(users =>
            users.map(userData =>
                new User(
                    userData.usuID,
                    userData.usuName,
                    userData.usuEmail,
                    userData.usuPassword,
                    userData.usuRole,
                    [] // or fetch and map rooms if needed
                )
            )
        );
    }
}