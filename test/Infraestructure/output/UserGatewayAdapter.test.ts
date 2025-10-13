import { UserGatewayAdapter } from "../../../src/infrastructure/output/persistence/gateway/UserGatewayAdapter";
import { User } from "../../../src/domain/models/UserModel";
import prisma from "../../../src/config/database";

// Mock del prisma client
jest.mock("../../../src/config/database", () => ({
    __esModule: true,
    default: {
        user: {
            findUnique: jest.fn(),
            findMany: jest.fn(),
            create: jest.fn(),
            update: jest.fn(),
            delete: jest.fn(),
        },
    },
}));

describe("UserGatewayAdapter", () => {
    let userGatewayAdapter: UserGatewayAdapter;
    let mockPrismaUser: any;

    beforeEach(() => {
        userGatewayAdapter = new UserGatewayAdapter();
        mockPrismaUser = prisma.user;
        jest.clearAllMocks();
    });

    describe("getUserById", () => {
        it("debería retornar un usuario cuando se proporciona un ID válido (caso normal)", async () => {
            // Arrange
            const mockUserId = "123e4567-e89b-12d3-a456-426614174000";
            const mockUserData = {
                usuID: mockUserId,
                usuName: "Juan Pérez",
                usuEmail: "juan.perez@example.com",
                usuPassword: "hashedPassword123",
                usuRole: "professor" as const,
            };
            mockPrismaUser.findUnique.mockResolvedValue(mockUserData);

            // Act
            const result = await userGatewayAdapter.getUserById(mockUserId);

            // Assert
            expect(mockPrismaUser.findUnique).toHaveBeenCalledWith({
                where: { usuID: mockUserId },
            });
            expect(result).toBeInstanceOf(User);
            expect(result?.usuID).toBe(mockUserId);
            expect(result?.usuName).toBe("Juan Pérez");
            expect(result?.usuEmail).toBe("juan.perez@example.com");
            expect(result?.usuRole).toBe("professor");
        });

        it("debería retornar null cuando el usuario no existe (caso límite)", async () => {
            // Arrange
            const nonExistentId = "non-existent-id";
            mockPrismaUser.findUnique.mockResolvedValue(null);

            // Act
            const result = await userGatewayAdapter.getUserById(nonExistentId);

            // Assert
            expect(mockPrismaUser.findUnique).toHaveBeenCalledWith({
                where: { usuID: nonExistentId },
            });
            expect(result).toBeNull();
        });

        it("debería manejar un ID con string vacío (caso límite)", async () => {
            // Arrange
            const emptyId = "";
            mockPrismaUser.findUnique.mockResolvedValue(null);

            // Act
            const result = await userGatewayAdapter.getUserById(emptyId);

            // Assert
            expect(mockPrismaUser.findUnique).toHaveBeenCalledWith({
                where: { usuID: emptyId },
            });
            expect(result).toBeNull();
        });

        it("debería manejar un ID con string muy largo (caso límite)", async () => {
            // Arrange
            const longId = "a".repeat(1000);
            mockPrismaUser.findUnique.mockResolvedValue(null);

            // Act
            const result = await userGatewayAdapter.getUserById(longId);

            // Assert
            expect(mockPrismaUser.findUnique).toHaveBeenCalledWith({
                where: { usuID: longId },
            });
            expect(result).toBeNull();
        });
    });

    describe("existByEmail", () => {
        it("debería retornar true cuando el email existe (caso normal)", async () => {
            // Arrange
            const existingEmail = "existing@example.com";
            const mockUserData = {
                usuID: "123",
                usuName: "Test User",
                usuEmail: existingEmail,
                usuPassword: "password",
                usuRole: "admin" as const,
            };
            mockPrismaUser.findUnique.mockResolvedValue(mockUserData);

            // Act
            const result = await userGatewayAdapter.existByEmail(existingEmail);

            // Assert
            expect(mockPrismaUser.findUnique).toHaveBeenCalledWith({
                where: { usuEmail: existingEmail },
            });
            expect(result).toBe(true);
        });

        it("debería retornar false cuando el email no existe (caso normal)", async () => {
            // Arrange
            const nonExistentEmail = "nonexistent@example.com";
            mockPrismaUser.findUnique.mockResolvedValue(null);

            // Act
            const result = await userGatewayAdapter.existByEmail(nonExistentEmail);

            // Assert
            expect(mockPrismaUser.findUnique).toHaveBeenCalledWith({
                where: { usuEmail: nonExistentEmail },
            });
            expect(result).toBe(false);
        });

        it("debería manejar un email con string vacío (caso límite)", async () => {
            // Arrange
            const emptyEmail = "";
            mockPrismaUser.findUnique.mockResolvedValue(null);

            // Act
            const result = await userGatewayAdapter.existByEmail(emptyEmail);

            // Assert
            expect(mockPrismaUser.findUnique).toHaveBeenCalledWith({
                where: { usuEmail: emptyEmail },
            });
            expect(result).toBe(false);
        });

        it("debería manejar un email con caracteres especiales (caso límite)", async () => {
            // Arrange
            const specialEmail = "test+special.email@sub-domain.example.com";
            mockPrismaUser.findUnique.mockResolvedValue(null);

            // Act
            const result = await userGatewayAdapter.existByEmail(specialEmail);

            // Assert
            expect(mockPrismaUser.findUnique).toHaveBeenCalledWith({
                where: { usuEmail: specialEmail },
            });
            expect(result).toBe(false);
        });
    });

    describe("getUserByEmail", () => {
        it("debería retornar un usuario cuando se proporciona un email válido (caso normal)", async () => {
            // Arrange
            const email = "maria.garcia@example.com";
            const mockUserData = {
                usuID: "456",
                usuName: "María García",
                usuEmail: email,
                usuPassword: "hashedPass456",
                usuRole: "admin" as const,
            };
            mockPrismaUser.findUnique.mockResolvedValue(mockUserData);

            // Act
            const result = await userGatewayAdapter.getUserByEmail(email);

            // Assert
            expect(mockPrismaUser.findUnique).toHaveBeenCalledWith({
                where: { usuEmail: email },
            });
            expect(result).toBeInstanceOf(User);
            expect(result?.usuEmail).toBe(email);
            expect(result?.usuName).toBe("María García");
            expect(result?.usuRole).toBe("admin");
        });

        it("debería retornar null cuando el email no existe (caso límite)", async () => {
            // Arrange
            const nonExistentEmail = "notfound@example.com";
            mockPrismaUser.findUnique.mockResolvedValue(null);

            // Act
            const result = await userGatewayAdapter.getUserByEmail(nonExistentEmail);

            // Assert
            expect(mockPrismaUser.findUnique).toHaveBeenCalledWith({
                where: { usuEmail: nonExistentEmail },
            });
            expect(result).toBeNull();
        });

        it("debería manejar un email sensible a mayúsculas (caso límite)", async () => {
            // Arrange
            const uppercaseEmail = "TEST@EXAMPLE.COM";
            mockPrismaUser.findUnique.mockResolvedValue(null);

            // Act
            const result = await userGatewayAdapter.getUserByEmail(uppercaseEmail);

            // Assert
            expect(mockPrismaUser.findUnique).toHaveBeenCalledWith({
                where: { usuEmail: uppercaseEmail },
            });
            expect(result).toBeNull();
        });

        it("debería manejar un email muy largo (caso límite)", async () => {
            // Arrange
            const longEmail = "a".repeat(240) + "@example.com";
            mockPrismaUser.findUnique.mockResolvedValue(null);

            // Act
            const result = await userGatewayAdapter.getUserByEmail(longEmail);

            // Assert
            expect(mockPrismaUser.findUnique).toHaveBeenCalledWith({
                where: { usuEmail: longEmail },
            });
            expect(result).toBeNull();
        });
    });

    describe("deleteUserById", () => {
        it("debería eliminar un usuario exitosamente cuando el usuario existe (caso normal)", async () => {
            // Arrange
            const userId = "789";
            const mockUserData = {
                usuID: userId,
                usuName: "User to Delete",
                usuEmail: "delete@example.com",
                usuPassword: "password",
                usuRole: "professor" as const,
            };
            mockPrismaUser.findUnique.mockResolvedValue(mockUserData);
            mockPrismaUser.delete.mockResolvedValue(mockUserData);

            // Act
            await userGatewayAdapter.deleteUserById(userId);

            // Assert
            expect(mockPrismaUser.findUnique).toHaveBeenCalledWith({
                where: { usuID: userId },
            });
            expect(mockPrismaUser.delete).toHaveBeenCalledWith({
                where: { usuID: userId },
            });
        });

        it("debería lanzar un error cuando el usuario no existe (caso límite)", async () => {
            // Arrange
            const nonExistentId = "non-existent-id";
            mockPrismaUser.findUnique.mockResolvedValue(null);

            // Act & Assert
            await expect(
                userGatewayAdapter.deleteUserById(nonExistentId)
            ).rejects.toThrow(`User with ID ${nonExistentId} does not exist.`);
            expect(mockPrismaUser.findUnique).toHaveBeenCalledWith({
                where: { usuID: nonExistentId },
            });
            expect(mockPrismaUser.delete).not.toHaveBeenCalled();
        });

        it("debería lanzar un error con ID vacío (caso límite)", async () => {
            // Arrange
            const emptyId = "";
            mockPrismaUser.findUnique.mockResolvedValue(null);

            // Act & Assert
            await expect(
                userGatewayAdapter.deleteUserById(emptyId)
            ).rejects.toThrow(`User with ID ${emptyId} does not exist.`);
        });

        it("debería manejar errores de base de datos apropiadamente", async () => {
            // Arrange
            const userId = "error-id";
            const mockUserData = { usuID: userId };
            mockPrismaUser.findUnique.mockResolvedValue(mockUserData);
            mockPrismaUser.delete.mockRejectedValue(new Error("Database error"));

            // Act & Assert
            await expect(
                userGatewayAdapter.deleteUserById(userId)
            ).rejects.toThrow("Database error");
        });
    });

    describe("changeUserPassword", () => {
        it("debería actualizar la contraseña exitosamente cuando el usuario existe (caso normal)", async () => {
            // Arrange
            const userId = "user-123";
            const newPassword = "newHashedPassword456";
            const mockUserData = {
                usuID: userId,
                usuName: "Test User",
                usuEmail: "test@example.com",
                usuPassword: "oldPassword",
                usuRole: "professor" as const,
            };
            const updatedUserData = { ...mockUserData, usuPassword: newPassword };
            
            mockPrismaUser.findUnique.mockResolvedValue(mockUserData);
            mockPrismaUser.update.mockResolvedValue(updatedUserData);

            // Act
            await userGatewayAdapter.changeUserPassword(userId, newPassword);

            // Assert
            expect(mockPrismaUser.findUnique).toHaveBeenCalledWith({
                where: { usuID: userId },
            });
            expect(mockPrismaUser.update).toHaveBeenCalledWith({
                where: { usuID: userId },
                data: { usuPassword: newPassword },
            });
        });

        it("debería lanzar un error cuando el usuario no existe (caso límite)", async () => {
            // Arrange
            const nonExistentId = "non-existent";
            const newPassword = "newPassword123";
            mockPrismaUser.findUnique.mockResolvedValue(null);

            // Act & Assert
            await expect(
                userGatewayAdapter.changeUserPassword(nonExistentId, newPassword)
            ).rejects.toThrow(`User with ID ${nonExistentId} does not exist.`);
            expect(mockPrismaUser.update).not.toHaveBeenCalled();
        });

        it("debería manejar una contraseña vacía (caso límite)", async () => {
            // Arrange
            const userId = "user-456";
            const emptyPassword = "";
            const mockUserData = {
                usuID: userId,
                usuName: "User",
                usuEmail: "user@example.com",
                usuPassword: "oldPassword",
                usuRole: "admin" as const,
            };
            
            mockPrismaUser.findUnique.mockResolvedValue(mockUserData);
            mockPrismaUser.update.mockResolvedValue({ ...mockUserData, usuPassword: emptyPassword });

            // Act
            await userGatewayAdapter.changeUserPassword(userId, emptyPassword);

            // Assert
            expect(mockPrismaUser.update).toHaveBeenCalledWith({
                where: { usuID: userId },
                data: { usuPassword: emptyPassword },
            });
        });

        it("debería manejar una contraseña muy larga (caso límite)", async () => {
            // Arrange
            const userId = "user-789";
            const longPassword = "a".repeat(500);
            const mockUserData = {
                usuID: userId,
                usuName: "User",
                usuEmail: "user@example.com",
                usuPassword: "oldPassword",
                usuRole: "professor" as const,
            };
            
            mockPrismaUser.findUnique.mockResolvedValue(mockUserData);
            mockPrismaUser.update.mockResolvedValue({ ...mockUserData, usuPassword: longPassword });

            // Act
            await userGatewayAdapter.changeUserPassword(userId, longPassword);

            // Assert
            expect(mockPrismaUser.update).toHaveBeenCalledWith({
                where: { usuID: userId },
                data: { usuPassword: longPassword },
            });
        });
    });

    describe("createUser", () => {
        it("debería crear un usuario exitosamente con datos válidos (caso normal)", async () => {
            // Arrange
            const newUser = new User(
                "",
                "Carlos Rodríguez",
                "carlos.rodriguez@example.com",
                "hashedPassword789",
                "professor",
                []
            );
            const mockCreatedUser = {
                usuID: "generated-id-123",
                usuName: newUser.usuName,
                usuEmail: newUser.usuEmail,
                usuPassword: newUser.usuPassword,
                usuRole: newUser.usuRole,
            };
            mockPrismaUser.create.mockResolvedValue(mockCreatedUser);

            // Act
            const result = await userGatewayAdapter.createUser(newUser);

            // Assert
            expect(mockPrismaUser.create).toHaveBeenCalledWith({
                data: {
                    usuName: newUser.usuName,
                    usuEmail: newUser.usuEmail,
                    usuPassword: newUser.usuPassword,
                    usuRole: newUser.usuRole,
                },
            });
            expect(result).toBeInstanceOf(User);
            expect(result.usuID).toBe("generated-id-123");
            expect(result.usuName).toBe("Carlos Rodríguez");
            expect(result.usuEmail).toBe("carlos.rodriguez@example.com");
            expect(result.usuPassword).toBe(""); // Password is not returned
            expect(result.usuRole).toBe("professor");
        });

        it("debería crear un usuario admin exitosamente (caso normal)", async () => {
            // Arrange
            const adminUser = new User(
                "",
                "Admin User",
                "admin@example.com",
                "adminPassword",
                "admin",
                []
            );
            const mockCreatedUser = {
                usuID: "admin-id-456",
                usuName: adminUser.usuName,
                usuEmail: adminUser.usuEmail,
                usuPassword: adminUser.usuPassword,
                usuRole: adminUser.usuRole,
            };
            mockPrismaUser.create.mockResolvedValue(mockCreatedUser);

            // Act
            const result = await userGatewayAdapter.createUser(adminUser);

            // Assert
            expect(result.usuRole).toBe("admin");
            expect(result.usuID).toBe("admin-id-456");
        });

        it("debería manejar un usuario con nombre mínimo (caso límite)", async () => {
            // Arrange
            const userWithShortName = new User(
                "",
                "A",
                "a@example.com",
                "password",
                "professor",
                []
            );
            const mockCreatedUser = {
                usuID: "short-name-id",
                usuName: "A",
                usuEmail: "a@example.com",
                usuPassword: "password",
                usuRole: "professor" as const,
            };
            mockPrismaUser.create.mockResolvedValue(mockCreatedUser);

            // Act
            const result = await userGatewayAdapter.createUser(userWithShortName);

            // Assert
            expect(result.usuName).toBe("A");
        });

        it("debería manejar un usuario con nombre muy largo (caso límite)", async () => {
            // Arrange
            const longName = "A".repeat(200);
            const userWithLongName = new User(
                "",
                longName,
                "longname@example.com",
                "password",
                "admin",
                []
            );
            const mockCreatedUser = {
                usuID: "long-name-id",
                usuName: longName,
                usuEmail: "longname@example.com",
                usuPassword: "password",
                usuRole: "admin" as const,
            };
            mockPrismaUser.create.mockResolvedValue(mockCreatedUser);

            // Act
            const result = await userGatewayAdapter.createUser(userWithLongName);

            // Assert
            expect(result.usuName).toBe(longName);
        });
    });

    describe("updateUser", () => {
        it("debería actualizar un usuario exitosamente con datos válidos (caso normal)", async () => {
            // Arrange
            const userId = "update-user-123";
            const updatedUser = new User(
                userId,
                "Updated Name",
                "updated@example.com",
                "newPassword",
                "admin",
                []
            );
            const mockUpdatedUser = {
                usuID: userId,
                usuName: updatedUser.usuName,
                usuEmail: updatedUser.usuEmail,
                usuPassword: updatedUser.usuPassword,
                usuRole: updatedUser.usuRole,
            };
            mockPrismaUser.update.mockResolvedValue(mockUpdatedUser);

            // Act
            const result = await userGatewayAdapter.updateUser(userId, updatedUser);

            // Assert
            expect(mockPrismaUser.update).toHaveBeenCalledWith({
                where: { usuID: userId },
                data: {
                    usuName: updatedUser.usuName,
                    usuEmail: updatedUser.usuEmail,
                    usuPassword: updatedUser.usuPassword,
                    usuRole: updatedUser.usuRole,
                },
            });
            expect(result).toBeInstanceOf(User);
            expect(result.usuID).toBe(userId);
            expect(result.usuName).toBe("Updated Name");
            expect(result.usuEmail).toBe("updated@example.com");
            expect(result.usuPassword).toBe(""); // Password is not returned
        });

        it("debería actualizar el rol de usuario de profesor a admin (caso normal)", async () => {
            // Arrange
            const userId = "role-change-123";
            const updatedUser = new User(
                userId,
                "Role Changer",
                "rolechange@example.com",
                "password",
                "admin",
                []
            );
            const mockUpdatedUser = {
                usuID: userId,
                usuName: "Role Changer",
                usuEmail: "rolechange@example.com",
                usuPassword: "password",
                usuRole: "admin" as const,
            };
            mockPrismaUser.update.mockResolvedValue(mockUpdatedUser);

            // Act
            const result = await userGatewayAdapter.updateUser(userId, updatedUser);

            // Assert
            expect(result.usuRole).toBe("admin");
        });

        it("debería manejar actualización con strings vacíos en los campos (caso límite)", async () => {
            // Arrange
            const userId = "empty-fields-123";
            const updatedUser = new User(
                userId,
                "",
                "",
                "",
                "professor",
                []
            );
            const mockUpdatedUser = {
                usuID: userId,
                usuName: "",
                usuEmail: "",
                usuPassword: "",
                usuRole: "professor" as const,
            };
            mockPrismaUser.update.mockResolvedValue(mockUpdatedUser);

            // Act
            const result = await userGatewayAdapter.updateUser(userId, updatedUser);

            // Assert
            expect(mockPrismaUser.update).toHaveBeenCalledWith({
                where: { usuID: userId },
                data: {
                    usuName: "",
                    usuEmail: "",
                    usuPassword: "",
                    usuRole: "professor",
                },
            });
        });

        it("debería manejar errores de base de datos durante la actualización (caso límite)", async () => {
            // Arrange
            const userId = "error-user-123";
            const updatedUser = new User(
                userId,
                "Error User",
                "error@example.com",
                "password",
                "professor",
                []
            );
            mockPrismaUser.update.mockRejectedValue(new Error("Update failed"));

            // Act & Assert
            await expect(
                userGatewayAdapter.updateUser(userId, updatedUser)
            ).rejects.toThrow("Update failed");
        });
    });

    describe("listProfessorUsers", () => {
        it("debería retornar una lista de usuarios profesores (caso normal)", async () => {
            // Arrange
            const mockProfessors = [
                {
                    usuID: "prof-1",
                    usuName: "Profesor Uno",
                    usuEmail: "prof1@example.com",
                    usuPassword: "pass1",
                    usuRole: "professor" as const,
                },
                {
                    usuID: "prof-2",
                    usuName: "Profesor Dos",
                    usuEmail: "prof2@example.com",
                    usuPassword: "pass2",
                    usuRole: "professor" as const,
                },
                {
                    usuID: "prof-3",
                    usuName: "Profesor Tres",
                    usuEmail: "prof3@example.com",
                    usuPassword: "pass3",
                    usuRole: "professor" as const,
                },
            ];
            mockPrismaUser.findMany.mockResolvedValue(mockProfessors);

            // Act
            const result = await userGatewayAdapter.listProfessorUsers("professor");

            // Assert
            expect(mockPrismaUser.findMany).toHaveBeenCalledWith({
                where: { usuRole: "professor" },
            });
            expect(result).toHaveLength(3);
            expect(result[0]).toBeInstanceOf(User);
            expect(result[0].usuName).toBe("Profesor Uno");
            expect(result[1].usuName).toBe("Profesor Dos");
            expect(result[2].usuName).toBe("Profesor Tres");
            expect(result[0].usuPassword).toBe(""); // Password should be empty
        });

        it("debería retornar una lista de usuarios administradores (caso normal)", async () => {
            // Arrange
            const mockAdmins = [
                {
                    usuID: "admin-1",
                    usuName: "Admin Uno",
                    usuEmail: "admin1@example.com",
                    usuPassword: "adminpass1",
                    usuRole: "admin" as const,
                },
                {
                    usuID: "admin-2",
                    usuName: "Admin Dos",
                    usuEmail: "admin2@example.com",
                    usuPassword: "adminpass2",
                    usuRole: "admin" as const,
                },
            ];
            mockPrismaUser.findMany.mockResolvedValue(mockAdmins);

            // Act
            const result = await userGatewayAdapter.listProfessorUsers("admin");

            // Assert
            expect(mockPrismaUser.findMany).toHaveBeenCalledWith({
                where: { usuRole: "admin" },
            });
            expect(result).toHaveLength(2);
            expect(result[0].usuRole).toBe("admin");
            expect(result[1].usuRole).toBe("admin");
        });

        it("debería retornar un array vacío cuando no se encuentran usuarios (caso límite)", async () => {
            // Arrange
            mockPrismaUser.findMany.mockResolvedValue([]);

            // Act
            const result = await userGatewayAdapter.listProfessorUsers("professor");

            // Assert
            expect(mockPrismaUser.findMany).toHaveBeenCalledWith({
                where: { usuRole: "professor" },
            });
            expect(result).toEqual([]);
            expect(result).toHaveLength(0);
        });

        it("debería retornar un único usuario cuando solo existe uno (caso límite)", async () => {
            // Arrange
            const singleUser = [
                {
                    usuID: "only-one",
                    usuName: "Only Professor",
                    usuEmail: "only@example.com",
                    usuPassword: "password",
                    usuRole: "professor" as const,
                },
            ];
            mockPrismaUser.findMany.mockResolvedValue(singleUser);

            // Act
            const result = await userGatewayAdapter.listProfessorUsers("professor");

            // Assert
            expect(result).toHaveLength(1);
            expect(result[0].usuName).toBe("Only Professor");
        });

        it("debería manejar un gran número de usuarios (caso límite)", async () => {
            // Arrange
            const manyUsers = Array.from({ length: 1000 }, (_, i) => ({
                usuID: `user-${i}`,
                usuName: `User ${i}`,
                usuEmail: `user${i}@example.com`,
                usuPassword: `pass${i}`,
                usuRole: "professor" as const,
            }));
            mockPrismaUser.findMany.mockResolvedValue(manyUsers);

            // Act
            const result = await userGatewayAdapter.listProfessorUsers("professor");

            // Assert
            expect(result).toHaveLength(1000);
            expect(result[0]).toBeInstanceOf(User);
            expect(result[999].usuName).toBe("User 999");
        });
    });
});
