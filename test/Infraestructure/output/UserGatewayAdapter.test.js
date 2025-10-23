"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const UserGatewayAdapter_1 = require("../../../src/infrastructure/output/persistence/gateway/UserGatewayAdapter");
const UserModel_1 = require("../../../src/domain/models/UserModel");
const database_1 = __importDefault(require("../../../src/config/database"));
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
    let userGatewayAdapter;
    let mockPrismaUser;
    beforeEach(() => {
        userGatewayAdapter = new UserGatewayAdapter_1.UserGatewayAdapter();
        mockPrismaUser = database_1.default.user;
        jest.clearAllMocks();
    });
    describe("getUserById", () => {
        it("debería retornar un usuario cuando se proporciona un ID válido (caso normal)", () => __awaiter(void 0, void 0, void 0, function* () {
            // Arrange
            const mockUserId = "123e4567-e89b-12d3-a456-426614174000";
            const mockUserData = {
                usuID: mockUserId,
                usuName: "Juan Pérez",
                usuEmail: "juan.perez@example.com",
                usuPassword: "hashedPassword123",
                usuRole: "professor",
            };
            mockPrismaUser.findUnique.mockResolvedValue(mockUserData);
            // Act
            const result = yield userGatewayAdapter.getUserById(mockUserId);
            // Assert
            expect(mockPrismaUser.findUnique).toHaveBeenCalledWith({
                where: { usuID: mockUserId },
            });
            expect(result).toBeInstanceOf(UserModel_1.User);
            expect(result === null || result === void 0 ? void 0 : result.usuID).toBe(mockUserId);
            expect(result === null || result === void 0 ? void 0 : result.usuName).toBe("Juan Pérez");
            expect(result === null || result === void 0 ? void 0 : result.usuEmail).toBe("juan.perez@example.com");
            expect(result === null || result === void 0 ? void 0 : result.usuRole).toBe("professor");
        }));
        it("debería retornar null cuando el usuario no existe (caso límite)", () => __awaiter(void 0, void 0, void 0, function* () {
            // Arrange
            const nonExistentId = "non-existent-id";
            mockPrismaUser.findUnique.mockResolvedValue(null);
            // Act
            const result = yield userGatewayAdapter.getUserById(nonExistentId);
            // Assert
            expect(mockPrismaUser.findUnique).toHaveBeenCalledWith({
                where: { usuID: nonExistentId },
            });
            expect(result).toBeNull();
        }));
        it("debería manejar un ID con string vacío (caso límite)", () => __awaiter(void 0, void 0, void 0, function* () {
            // Arrange
            const emptyId = "";
            mockPrismaUser.findUnique.mockResolvedValue(null);
            // Act
            const result = yield userGatewayAdapter.getUserById(emptyId);
            // Assert
            expect(mockPrismaUser.findUnique).toHaveBeenCalledWith({
                where: { usuID: emptyId },
            });
            expect(result).toBeNull();
        }));
        it("debería manejar un ID con string muy largo (caso límite)", () => __awaiter(void 0, void 0, void 0, function* () {
            // Arrange
            const longId = "a".repeat(1000);
            mockPrismaUser.findUnique.mockResolvedValue(null);
            // Act
            const result = yield userGatewayAdapter.getUserById(longId);
            // Assert
            expect(mockPrismaUser.findUnique).toHaveBeenCalledWith({
                where: { usuID: longId },
            });
            expect(result).toBeNull();
        }));
    });
    describe("existByEmail", () => {
        it("debería retornar true cuando el email existe (caso normal)", () => __awaiter(void 0, void 0, void 0, function* () {
            // Arrange
            const existingEmail = "existing@example.com";
            const mockUserData = {
                usuID: "123",
                usuName: "Test User",
                usuEmail: existingEmail,
                usuPassword: "password",
                usuRole: "admin",
            };
            mockPrismaUser.findUnique.mockResolvedValue(mockUserData);
            // Act
            const result = yield userGatewayAdapter.existByEmail(existingEmail);
            // Assert
            expect(mockPrismaUser.findUnique).toHaveBeenCalledWith({
                where: { usuEmail: existingEmail },
            });
            expect(result).toBe(true);
        }));
        it("debería retornar false cuando el email no existe (caso normal)", () => __awaiter(void 0, void 0, void 0, function* () {
            // Arrange
            const nonExistentEmail = "nonexistent@example.com";
            mockPrismaUser.findUnique.mockResolvedValue(null);
            // Act
            const result = yield userGatewayAdapter.existByEmail(nonExistentEmail);
            // Assert
            expect(mockPrismaUser.findUnique).toHaveBeenCalledWith({
                where: { usuEmail: nonExistentEmail },
            });
            expect(result).toBe(false);
        }));
        it("debería manejar un email con string vacío (caso límite)", () => __awaiter(void 0, void 0, void 0, function* () {
            // Arrange
            const emptyEmail = "";
            mockPrismaUser.findUnique.mockResolvedValue(null);
            // Act
            const result = yield userGatewayAdapter.existByEmail(emptyEmail);
            // Assert
            expect(mockPrismaUser.findUnique).toHaveBeenCalledWith({
                where: { usuEmail: emptyEmail },
            });
            expect(result).toBe(false);
        }));
        it("debería manejar un email con caracteres especiales (caso límite)", () => __awaiter(void 0, void 0, void 0, function* () {
            // Arrange
            const specialEmail = "test+special.email@sub-domain.example.com";
            mockPrismaUser.findUnique.mockResolvedValue(null);
            // Act
            const result = yield userGatewayAdapter.existByEmail(specialEmail);
            // Assert
            expect(mockPrismaUser.findUnique).toHaveBeenCalledWith({
                where: { usuEmail: specialEmail },
            });
            expect(result).toBe(false);
        }));
    });
    describe("getUserByEmail", () => {
        it("debería retornar un usuario cuando se proporciona un email válido (caso normal)", () => __awaiter(void 0, void 0, void 0, function* () {
            // Arrange
            const email = "maria.garcia@example.com";
            const mockUserData = {
                usuID: "456",
                usuName: "María García",
                usuEmail: email,
                usuPassword: "hashedPass456",
                usuRole: "admin",
            };
            mockPrismaUser.findUnique.mockResolvedValue(mockUserData);
            // Act
            const result = yield userGatewayAdapter.getUserByEmail(email);
            // Assert
            expect(mockPrismaUser.findUnique).toHaveBeenCalledWith({
                where: { usuEmail: email },
            });
            expect(result).toBeInstanceOf(UserModel_1.User);
            expect(result === null || result === void 0 ? void 0 : result.usuEmail).toBe(email);
            expect(result === null || result === void 0 ? void 0 : result.usuName).toBe("María García");
            expect(result === null || result === void 0 ? void 0 : result.usuRole).toBe("admin");
        }));
        it("debería retornar null cuando el email no existe (caso límite)", () => __awaiter(void 0, void 0, void 0, function* () {
            // Arrange
            const nonExistentEmail = "notfound@example.com";
            mockPrismaUser.findUnique.mockResolvedValue(null);
            // Act
            const result = yield userGatewayAdapter.getUserByEmail(nonExistentEmail);
            // Assert
            expect(mockPrismaUser.findUnique).toHaveBeenCalledWith({
                where: { usuEmail: nonExistentEmail },
            });
            expect(result).toBeNull();
        }));
        it("debería manejar un email sensible a mayúsculas (caso límite)", () => __awaiter(void 0, void 0, void 0, function* () {
            // Arrange
            const uppercaseEmail = "TEST@EXAMPLE.COM";
            mockPrismaUser.findUnique.mockResolvedValue(null);
            // Act
            const result = yield userGatewayAdapter.getUserByEmail(uppercaseEmail);
            // Assert
            expect(mockPrismaUser.findUnique).toHaveBeenCalledWith({
                where: { usuEmail: uppercaseEmail },
            });
            expect(result).toBeNull();
        }));
        it("debería manejar un email muy largo (caso límite)", () => __awaiter(void 0, void 0, void 0, function* () {
            // Arrange
            const longEmail = "a".repeat(240) + "@example.com";
            mockPrismaUser.findUnique.mockResolvedValue(null);
            // Act
            const result = yield userGatewayAdapter.getUserByEmail(longEmail);
            // Assert
            expect(mockPrismaUser.findUnique).toHaveBeenCalledWith({
                where: { usuEmail: longEmail },
            });
            expect(result).toBeNull();
        }));
    });
    describe("deleteUserById", () => {
        it("debería eliminar un usuario exitosamente cuando el usuario existe (caso normal)", () => __awaiter(void 0, void 0, void 0, function* () {
            // Arrange
            const userId = "789";
            const mockUserData = {
                usuID: userId,
                usuName: "User to Delete",
                usuEmail: "delete@example.com",
                usuPassword: "password",
                usuRole: "professor",
            };
            mockPrismaUser.findUnique.mockResolvedValue(mockUserData);
            mockPrismaUser.delete.mockResolvedValue(mockUserData);
            // Act
            yield userGatewayAdapter.deleteUserById(userId);
            // Assert
            expect(mockPrismaUser.findUnique).toHaveBeenCalledWith({
                where: { usuID: userId },
            });
            expect(mockPrismaUser.delete).toHaveBeenCalledWith({
                where: { usuID: userId },
            });
        }));
        it("debería lanzar un error cuando el usuario no existe (caso límite)", () => __awaiter(void 0, void 0, void 0, function* () {
            // Arrange
            const nonExistentId = "non-existent-id";
            mockPrismaUser.findUnique.mockResolvedValue(null);
            // Act & Assert
            yield expect(userGatewayAdapter.deleteUserById(nonExistentId)).rejects.toThrow(`User with ID ${nonExistentId} does not exist.`);
            expect(mockPrismaUser.findUnique).toHaveBeenCalledWith({
                where: { usuID: nonExistentId },
            });
            expect(mockPrismaUser.delete).not.toHaveBeenCalled();
        }));
        it("debería lanzar un error con ID vacío (caso límite)", () => __awaiter(void 0, void 0, void 0, function* () {
            // Arrange
            const emptyId = "";
            mockPrismaUser.findUnique.mockResolvedValue(null);
            // Act & Assert
            yield expect(userGatewayAdapter.deleteUserById(emptyId)).rejects.toThrow(`User with ID ${emptyId} does not exist.`);
        }));
        it("debería manejar errores de base de datos apropiadamente", () => __awaiter(void 0, void 0, void 0, function* () {
            // Arrange
            const userId = "error-id";
            const mockUserData = { usuID: userId };
            mockPrismaUser.findUnique.mockResolvedValue(mockUserData);
            mockPrismaUser.delete.mockRejectedValue(new Error("Database error"));
            // Act & Assert
            yield expect(userGatewayAdapter.deleteUserById(userId)).rejects.toThrow("Database error");
        }));
    });
    describe("changeUserPassword", () => {
        it("debería actualizar la contraseña exitosamente cuando el usuario existe (caso normal)", () => __awaiter(void 0, void 0, void 0, function* () {
            // Arrange
            const userId = "user-123";
            const newPassword = "newHashedPassword456";
            const mockUserData = {
                usuID: userId,
                usuName: "Test User",
                usuEmail: "test@example.com",
                usuPassword: "oldPassword",
                usuRole: "professor",
            };
            const updatedUserData = Object.assign(Object.assign({}, mockUserData), { usuPassword: newPassword });
            mockPrismaUser.findUnique.mockResolvedValue(mockUserData);
            mockPrismaUser.update.mockResolvedValue(updatedUserData);
            // Act
            yield userGatewayAdapter.changeUserPassword(userId, newPassword);
            // Assert
            expect(mockPrismaUser.findUnique).toHaveBeenCalledWith({
                where: { usuID: userId },
            });
            expect(mockPrismaUser.update).toHaveBeenCalledWith({
                where: { usuID: userId },
                data: { usuPassword: newPassword },
            });
        }));
        it("debería lanzar un error cuando el usuario no existe (caso límite)", () => __awaiter(void 0, void 0, void 0, function* () {
            // Arrange
            const nonExistentId = "non-existent";
            const newPassword = "newPassword123";
            mockPrismaUser.findUnique.mockResolvedValue(null);
            // Act & Assert
            yield expect(userGatewayAdapter.changeUserPassword(nonExistentId, newPassword)).rejects.toThrow(`User with ID ${nonExistentId} does not exist.`);
            expect(mockPrismaUser.update).not.toHaveBeenCalled();
        }));
        it("debería manejar una contraseña vacía (caso límite)", () => __awaiter(void 0, void 0, void 0, function* () {
            // Arrange
            const userId = "user-456";
            const emptyPassword = "";
            const mockUserData = {
                usuID: userId,
                usuName: "User",
                usuEmail: "user@example.com",
                usuPassword: "oldPassword",
                usuRole: "admin",
            };
            mockPrismaUser.findUnique.mockResolvedValue(mockUserData);
            mockPrismaUser.update.mockResolvedValue(Object.assign(Object.assign({}, mockUserData), { usuPassword: emptyPassword }));
            // Act
            yield userGatewayAdapter.changeUserPassword(userId, emptyPassword);
            // Assert
            expect(mockPrismaUser.update).toHaveBeenCalledWith({
                where: { usuID: userId },
                data: { usuPassword: emptyPassword },
            });
        }));
        it("debería manejar una contraseña muy larga (caso límite)", () => __awaiter(void 0, void 0, void 0, function* () {
            // Arrange
            const userId = "user-789";
            const longPassword = "a".repeat(500);
            const mockUserData = {
                usuID: userId,
                usuName: "User",
                usuEmail: "user@example.com",
                usuPassword: "oldPassword",
                usuRole: "professor",
            };
            mockPrismaUser.findUnique.mockResolvedValue(mockUserData);
            mockPrismaUser.update.mockResolvedValue(Object.assign(Object.assign({}, mockUserData), { usuPassword: longPassword }));
            // Act
            yield userGatewayAdapter.changeUserPassword(userId, longPassword);
            // Assert
            expect(mockPrismaUser.update).toHaveBeenCalledWith({
                where: { usuID: userId },
                data: { usuPassword: longPassword },
            });
        }));
    });
    describe("createUser", () => {
        it("debería crear un usuario exitosamente con datos válidos (caso normal)", () => __awaiter(void 0, void 0, void 0, function* () {
            // Arrange
            const newUser = new UserModel_1.User("", "Carlos Rodríguez", "carlos.rodriguez@example.com", "hashedPassword789", "professor", []);
            const mockCreatedUser = {
                usuID: "generated-id-123",
                usuName: newUser.usuName,
                usuEmail: newUser.usuEmail,
                usuPassword: newUser.usuPassword,
                usuRole: newUser.usuRole,
            };
            mockPrismaUser.create.mockResolvedValue(mockCreatedUser);
            // Act
            const result = yield userGatewayAdapter.createUser(newUser);
            // Assert
            expect(mockPrismaUser.create).toHaveBeenCalledWith({
                data: {
                    usuName: newUser.usuName,
                    usuEmail: newUser.usuEmail,
                    usuPassword: newUser.usuPassword,
                    usuRole: newUser.usuRole,
                },
            });
            expect(result).toBeInstanceOf(UserModel_1.User);
            expect(result.usuID).toBe("generated-id-123");
            expect(result.usuName).toBe("Carlos Rodríguez");
            expect(result.usuEmail).toBe("carlos.rodriguez@example.com");
            expect(result.usuPassword).toBe(""); // Password is not returned
            expect(result.usuRole).toBe("professor");
        }));
        it("debería crear un usuario admin exitosamente (caso normal)", () => __awaiter(void 0, void 0, void 0, function* () {
            // Arrange
            const adminUser = new UserModel_1.User("", "Admin User", "admin@example.com", "adminPassword", "admin", []);
            const mockCreatedUser = {
                usuID: "admin-id-456",
                usuName: adminUser.usuName,
                usuEmail: adminUser.usuEmail,
                usuPassword: adminUser.usuPassword,
                usuRole: adminUser.usuRole,
            };
            mockPrismaUser.create.mockResolvedValue(mockCreatedUser);
            // Act
            const result = yield userGatewayAdapter.createUser(adminUser);
            // Assert
            expect(result.usuRole).toBe("admin");
            expect(result.usuID).toBe("admin-id-456");
        }));
        it("debería manejar un usuario con nombre mínimo (caso límite)", () => __awaiter(void 0, void 0, void 0, function* () {
            // Arrange
            const userWithShortName = new UserModel_1.User("", "A", "a@example.com", "password", "professor", []);
            const mockCreatedUser = {
                usuID: "short-name-id",
                usuName: "A",
                usuEmail: "a@example.com",
                usuPassword: "password",
                usuRole: "professor",
            };
            mockPrismaUser.create.mockResolvedValue(mockCreatedUser);
            // Act
            const result = yield userGatewayAdapter.createUser(userWithShortName);
            // Assert
            expect(result.usuName).toBe("A");
        }));
        it("debería manejar un usuario con nombre muy largo (caso límite)", () => __awaiter(void 0, void 0, void 0, function* () {
            // Arrange
            const longName = "A".repeat(200);
            const userWithLongName = new UserModel_1.User("", longName, "longname@example.com", "password", "admin", []);
            const mockCreatedUser = {
                usuID: "long-name-id",
                usuName: longName,
                usuEmail: "longname@example.com",
                usuPassword: "password",
                usuRole: "admin",
            };
            mockPrismaUser.create.mockResolvedValue(mockCreatedUser);
            // Act
            const result = yield userGatewayAdapter.createUser(userWithLongName);
            // Assert
            expect(result.usuName).toBe(longName);
        }));
    });
    describe("updateUser", () => {
        it("debería actualizar un usuario exitosamente con datos válidos (caso normal)", () => __awaiter(void 0, void 0, void 0, function* () {
            // Arrange
            const userId = "update-user-123";
            const updatedUser = new UserModel_1.User(userId, "Updated Name", "updated@example.com", "newPassword", "admin", []);
            const mockUpdatedUser = {
                usuID: userId,
                usuName: updatedUser.usuName,
                usuEmail: updatedUser.usuEmail,
                usuPassword: updatedUser.usuPassword,
                usuRole: updatedUser.usuRole,
            };
            mockPrismaUser.update.mockResolvedValue(mockUpdatedUser);
            // Act
            const result = yield userGatewayAdapter.updateUser(userId, updatedUser);
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
            expect(result).toBeInstanceOf(UserModel_1.User);
            expect(result.usuID).toBe(userId);
            expect(result.usuName).toBe("Updated Name");
            expect(result.usuEmail).toBe("updated@example.com");
            expect(result.usuPassword).toBe(""); // Password is not returned
        }));
        it("debería actualizar el rol de usuario de profesor a admin (caso normal)", () => __awaiter(void 0, void 0, void 0, function* () {
            // Arrange
            const userId = "role-change-123";
            const updatedUser = new UserModel_1.User(userId, "Role Changer", "rolechange@example.com", "password", "admin", []);
            const mockUpdatedUser = {
                usuID: userId,
                usuName: "Role Changer",
                usuEmail: "rolechange@example.com",
                usuPassword: "password",
                usuRole: "admin",
            };
            mockPrismaUser.update.mockResolvedValue(mockUpdatedUser);
            // Act
            const result = yield userGatewayAdapter.updateUser(userId, updatedUser);
            // Assert
            expect(result.usuRole).toBe("admin");
        }));
        it("debería manejar actualización con strings vacíos en los campos (caso límite)", () => __awaiter(void 0, void 0, void 0, function* () {
            // Arrange
            const userId = "empty-fields-123";
            const updatedUser = new UserModel_1.User(userId, "", "", "", "professor", []);
            const mockUpdatedUser = {
                usuID: userId,
                usuName: "",
                usuEmail: "",
                usuPassword: "",
                usuRole: "professor",
            };
            mockPrismaUser.update.mockResolvedValue(mockUpdatedUser);
            // Act
            const result = yield userGatewayAdapter.updateUser(userId, updatedUser);
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
        }));
        it("debería manejar errores de base de datos durante la actualización (caso límite)", () => __awaiter(void 0, void 0, void 0, function* () {
            // Arrange
            const userId = "error-user-123";
            const updatedUser = new UserModel_1.User(userId, "Error User", "error@example.com", "password", "professor", []);
            mockPrismaUser.update.mockRejectedValue(new Error("Update failed"));
            // Act & Assert
            yield expect(userGatewayAdapter.updateUser(userId, updatedUser)).rejects.toThrow("Update failed");
        }));
    });
    describe("listProfessorUsers", () => {
        it("debería retornar una lista de usuarios profesores (caso normal)", () => __awaiter(void 0, void 0, void 0, function* () {
            // Arrange
            const mockProfessors = [
                {
                    usuID: "prof-1",
                    usuName: "Profesor Uno",
                    usuEmail: "prof1@example.com",
                    usuPassword: "pass1",
                    usuRole: "professor",
                },
                {
                    usuID: "prof-2",
                    usuName: "Profesor Dos",
                    usuEmail: "prof2@example.com",
                    usuPassword: "pass2",
                    usuRole: "professor",
                },
                {
                    usuID: "prof-3",
                    usuName: "Profesor Tres",
                    usuEmail: "prof3@example.com",
                    usuPassword: "pass3",
                    usuRole: "professor",
                },
            ];
            mockPrismaUser.findMany.mockResolvedValue(mockProfessors);
            // Act
            const result = yield userGatewayAdapter.listProfessorUsers("professor");
            // Assert
            expect(mockPrismaUser.findMany).toHaveBeenCalledWith({
                where: { usuRole: "professor" },
            });
            expect(result).toHaveLength(3);
            expect(result[0]).toBeInstanceOf(UserModel_1.User);
            expect(result[0].usuName).toBe("Profesor Uno");
            expect(result[1].usuName).toBe("Profesor Dos");
            expect(result[2].usuName).toBe("Profesor Tres");
            expect(result[0].usuPassword).toBe(""); // Password should be empty
        }));
        it("debería retornar una lista de usuarios administradores (caso normal)", () => __awaiter(void 0, void 0, void 0, function* () {
            // Arrange
            const mockAdmins = [
                {
                    usuID: "admin-1",
                    usuName: "Admin Uno",
                    usuEmail: "admin1@example.com",
                    usuPassword: "adminpass1",
                    usuRole: "admin",
                },
                {
                    usuID: "admin-2",
                    usuName: "Admin Dos",
                    usuEmail: "admin2@example.com",
                    usuPassword: "adminpass2",
                    usuRole: "admin",
                },
            ];
            mockPrismaUser.findMany.mockResolvedValue(mockAdmins);
            // Act
            const result = yield userGatewayAdapter.listProfessorUsers("admin");
            // Assert
            expect(mockPrismaUser.findMany).toHaveBeenCalledWith({
                where: { usuRole: "admin" },
            });
            expect(result).toHaveLength(2);
            expect(result[0].usuRole).toBe("admin");
            expect(result[1].usuRole).toBe("admin");
        }));
        it("debería retornar un array vacío cuando no se encuentran usuarios (caso límite)", () => __awaiter(void 0, void 0, void 0, function* () {
            // Arrange
            mockPrismaUser.findMany.mockResolvedValue([]);
            // Act
            const result = yield userGatewayAdapter.listProfessorUsers("professor");
            // Assert
            expect(mockPrismaUser.findMany).toHaveBeenCalledWith({
                where: { usuRole: "professor" },
            });
            expect(result).toEqual([]);
            expect(result).toHaveLength(0);
        }));
        it("debería retornar un único usuario cuando solo existe uno (caso límite)", () => __awaiter(void 0, void 0, void 0, function* () {
            // Arrange
            const singleUser = [
                {
                    usuID: "only-one",
                    usuName: "Only Professor",
                    usuEmail: "only@example.com",
                    usuPassword: "password",
                    usuRole: "professor",
                },
            ];
            mockPrismaUser.findMany.mockResolvedValue(singleUser);
            // Act
            const result = yield userGatewayAdapter.listProfessorUsers("professor");
            // Assert
            expect(result).toHaveLength(1);
            expect(result[0].usuName).toBe("Only Professor");
        }));
        it("debería manejar un gran número de usuarios (caso límite)", () => __awaiter(void 0, void 0, void 0, function* () {
            // Arrange
            const manyUsers = Array.from({ length: 1000 }, (_, i) => ({
                usuID: `user-${i}`,
                usuName: `User ${i}`,
                usuEmail: `user${i}@example.com`,
                usuPassword: `pass${i}`,
                usuRole: "professor",
            }));
            mockPrismaUser.findMany.mockResolvedValue(manyUsers);
            // Act
            const result = yield userGatewayAdapter.listProfessorUsers("professor");
            // Assert
            expect(result).toHaveLength(1000);
            expect(result[0]).toBeInstanceOf(UserModel_1.User);
            expect(result[999].usuName).toBe("User 999");
        }));
    });
});
