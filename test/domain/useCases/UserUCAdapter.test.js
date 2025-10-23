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
Object.defineProperty(exports, "__esModule", { value: true });
const UserUCAdapter_1 = require("../../../src/domain/useCases/UserUCAdapter");
describe("UserUCAdapter", () => {
    let userUCAdapter;
    let mockUserGateway;
    let mockRoomGateway;
    let mockErrorFormatter;
    let mockEncrypt;
    beforeEach(() => {
        mockUserGateway = {
            getUserById: jest.fn(),
            existByEmail: jest.fn(),
            getUserByEmail: jest.fn(),
            deleteUserById: jest.fn(),
            changeUserPassword: jest.fn(),
            createUser: jest.fn(),
            updateUser: jest.fn(),
            listProfessorUsers: jest.fn(),
        };
        mockRoomGateway = {
            createRoom: jest.fn(),
            obtainRoomByID: jest.fn(),
            obtainRoomsByTeacher: jest.fn(),
            uptdateRoom: jest.fn(),
            deleteRoomByID: jest.fn(),
            validateRoomPassword: jest.fn(),
        };
        mockErrorFormatter = {
            errorNotFound: jest.fn(),
            errorExistsEntity: jest.fn(),
            genericError: jest.fn(),
        };
        mockEncrypt = {
            hashPassword: jest.fn(),
            comparePassword: jest.fn(),
        };
        userUCAdapter = new UserUCAdapter_1.UserUCAdapter(mockUserGateway, mockRoomGateway, mockErrorFormatter, mockEncrypt);
    });
    describe("getUserById", () => {
        it("debería retornar el usuario sin contraseña cuando existe", () => __awaiter(void 0, void 0, void 0, function* () {
            // Arrange
            const mockUser = {
                usuID: "user1",
                usuName: "Test User",
                usuEmail: "test@test.com",
                usuPassword: "hashed123",
                usuRole: "professor",
                room: [],
            };
            mockUserGateway.getUserById.mockResolvedValue(mockUser);
            // Act
            const result = yield userUCAdapter.getUserById("user1");
            // Assert
            expect(result).toEqual(Object.assign(Object.assign({}, mockUser), { usuPassword: "" }));
            expect(mockUserGateway.getUserById).toHaveBeenCalledWith("user1");
        }));
        it("debería lanzar error cuando el usuario no existe", () => __awaiter(void 0, void 0, void 0, function* () {
            // Arrange
            mockUserGateway.getUserById.mockResolvedValue(null);
            // Act
            const result = yield userUCAdapter.getUserById("user999");
            // Assert
            expect(result).toBeNull();
            expect(mockErrorFormatter.errorNotFound).toHaveBeenCalledWith("Usuario con id user999 no existe.");
        }));
    });
    describe("deleteUserById", () => {
        it("debería eliminar el usuario cuando existe", () => __awaiter(void 0, void 0, void 0, function* () {
            // Arrange
            const mockUser = { usuID: "user1" };
            mockUserGateway.getUserById.mockResolvedValue(mockUser);
            // Act
            yield userUCAdapter.deleteUserById("user1");
            // Assert
            expect(mockUserGateway.deleteUserById).toHaveBeenCalledWith("user1");
        }));
        it("debería lanzar error cuando el usuario no existe", () => __awaiter(void 0, void 0, void 0, function* () {
            // Arrange
            mockUserGateway.getUserById.mockResolvedValue(null);
            // Act
            yield userUCAdapter.deleteUserById("user999");
            // Assert
            expect(mockErrorFormatter.errorNotFound).toHaveBeenCalledWith("Usuario con id user999 no existe.");
        }));
    });
    describe("changeUserPassword", () => {
        it("debería cambiar la contraseña cuando la contraseña vieja es correcta", () => __awaiter(void 0, void 0, void 0, function* () {
            // Arrange
            const mockUser = {
                usuID: "user1",
                usuPassword: "oldHashedPassword",
            };
            mockUserGateway.getUserById.mockResolvedValue(mockUser);
            mockEncrypt.comparePassword.mockResolvedValue(true);
            mockEncrypt.hashPassword.mockResolvedValue("newHashedPassword");
            // Act
            yield userUCAdapter.changeUserPassword("user1", "newPassword", "oldPassword");
            // Assert
            expect(mockEncrypt.comparePassword).toHaveBeenCalledWith("oldPassword", "oldHashedPassword");
            expect(mockEncrypt.hashPassword).toHaveBeenCalledWith("newPassword");
            expect(mockUserGateway.updateUser).toHaveBeenCalled();
        }));
        it("debería lanzar error cuando la contraseña vieja es incorrecta", () => __awaiter(void 0, void 0, void 0, function* () {
            // Arrange
            const mockUser = {
                usuID: "user1",
                usuPassword: "oldHashedPassword",
            };
            mockUserGateway.getUserById.mockResolvedValue(mockUser);
            mockEncrypt.comparePassword.mockResolvedValue(false);
            // Act
            yield userUCAdapter.changeUserPassword("user1", "newPassword", "wrongPassword");
            // Assert
            expect(mockErrorFormatter.genericError).toHaveBeenCalledWith("La contraseña vieja es incorrecta.");
        }));
        it("debería lanzar error cuando el usuario no existe", () => __awaiter(void 0, void 0, void 0, function* () {
            // Arrange
            mockUserGateway.getUserById.mockResolvedValue(null);
            // Act
            yield userUCAdapter.changeUserPassword("user999", "newPassword", "oldPassword");
            // Assert
            expect(mockErrorFormatter.errorNotFound).toHaveBeenCalledWith("Usuario con id user999 no existe.");
        }));
    });
    describe("createUser", () => {
        it("debería crear un usuario cuando el email no existe", () => __awaiter(void 0, void 0, void 0, function* () {
            // Arrange
            const mockUser = {
                usuID: "user1",
                usuName: "Test User",
                usuEmail: "test@test.com",
                usuPassword: "password123",
                usuRole: "professor",
                room: [],
            };
            mockUserGateway.existByEmail.mockResolvedValue(false);
            mockEncrypt.hashPassword.mockResolvedValue("hashedPassword");
            mockUserGateway.createUser.mockResolvedValue(Object.assign(Object.assign({}, mockUser), { usuPassword: "hashedPassword" }));
            // Act
            const result = yield userUCAdapter.createUser(mockUser);
            // Assert
            expect(mockEncrypt.hashPassword).toHaveBeenCalledWith("password123");
            expect(mockUserGateway.createUser).toHaveBeenCalled();
            expect(result).not.toBeNull();
        }));
        it("debería lanzar error cuando el email ya existe", () => __awaiter(void 0, void 0, void 0, function* () {
            // Arrange
            const mockUser = {
                usuEmail: "existing@test.com",
            };
            mockUserGateway.existByEmail.mockResolvedValue(true);
            // Act
            const result = yield userUCAdapter.createUser(mockUser);
            // Assert
            expect(result).toBeNull();
            expect(mockErrorFormatter.errorExistsEntity).toHaveBeenCalledWith("Usuario con email existing@test.com ya existe.");
        }));
    });
    describe("updateUser", () => {
        it("debería actualizar el usuario cuando existe y el email no cambia", () => __awaiter(void 0, void 0, void 0, function* () {
            // Arrange
            const existingUser = {
                usuID: "user1",
                usuEmail: "test@test.com",
                usuPassword: "oldPassword",
            };
            const updatedUser = {
                usuID: "user1",
                usuEmail: "test@test.com",
                usuPassword: "newPassword",
            };
            mockUserGateway.getUserById.mockResolvedValue(existingUser);
            mockEncrypt.hashPassword.mockResolvedValue("hashedNewPassword");
            mockUserGateway.updateUser.mockResolvedValue(Object.assign(Object.assign({}, updatedUser), { usuPassword: "hashedNewPassword" }));
            // Act
            const result = yield userUCAdapter.updateUser("user1", updatedUser);
            // Assert
            expect(mockUserGateway.updateUser).toHaveBeenCalled();
            expect(result).not.toBeNull();
        }));
        it("debería validar el nuevo email cuando cambia", () => __awaiter(void 0, void 0, void 0, function* () {
            // Arrange
            const existingUser = {
                usuID: "user1",
                usuEmail: "old@test.com",
                usuPassword: "oldPassword",
            };
            const updatedUser = {
                usuID: "user1",
                usuEmail: "new@test.com",
                usuPassword: "",
            };
            mockUserGateway.getUserById.mockResolvedValue(existingUser);
            mockUserGateway.existByEmail.mockResolvedValue(false);
            mockUserGateway.updateUser.mockResolvedValue(updatedUser);
            // Act
            const result = yield userUCAdapter.updateUser("user1", updatedUser);
            // Assert
            expect(mockUserGateway.existByEmail).toHaveBeenCalledWith("new@test.com");
            expect(result).not.toBeNull();
        }));
        it("debería lanzar error cuando el usuario no existe", () => __awaiter(void 0, void 0, void 0, function* () {
            // Arrange
            mockUserGateway.getUserById.mockResolvedValue(null);
            // Act
            const result = yield userUCAdapter.updateUser("user999", {});
            // Assert
            expect(result).toBeNull();
            expect(mockErrorFormatter.errorNotFound).toHaveBeenCalledWith("Usuario con id user999 no existe.");
        }));
        it("debería lanzar error cuando el nuevo email ya existe", () => __awaiter(void 0, void 0, void 0, function* () {
            // Arrange
            const existingUser = {
                usuID: "user1",
                usuEmail: "old@test.com",
            };
            const updatedUser = {
                usuID: "user1",
                usuEmail: "existing@test.com",
            };
            mockUserGateway.getUserById.mockResolvedValue(existingUser);
            mockUserGateway.existByEmail.mockResolvedValue(true);
            // Act
            const result = yield userUCAdapter.updateUser("user1", updatedUser);
            // Assert
            expect(result).toBeNull();
            expect(mockErrorFormatter.errorExistsEntity).toHaveBeenCalledWith("Usuario con email existing@test.com ya existe.");
        }));
    });
    describe("listProfessorUsers", () => {
        it("debería retornar la lista de profesores cuando el rol es professor", () => __awaiter(void 0, void 0, void 0, function* () {
            // Arrange
            const mockProfessors = [
                { usuID: "prof1", usuRole: "professor" },
                { usuID: "prof2", usuRole: "professor" },
            ];
            mockUserGateway.listProfessorUsers.mockResolvedValue(mockProfessors);
            // Act
            const result = yield userUCAdapter.listProfessorUsers("professor");
            // Assert
            expect(result).toEqual(mockProfessors);
            expect(mockUserGateway.listProfessorUsers).toHaveBeenCalledWith("professor");
        }));
        it("debería lanzar error cuando el rol no es professor", () => {
            // Act & Assert
            expect(() => userUCAdapter.listProfessorUsers("admin")).toThrow("Usuario con rol admin no es un profesor.");
        });
    });
});
