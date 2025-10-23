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
const AuthUCAdapter_1 = require("../../../src/domain/useCases/AuthUCAdapter");
describe("AuthUCAdapter", () => {
    let authUCAdapter;
    let mockUserGateway;
    let mockErrorFormatter;
    let mockEncrypt;
    let mockTokenService;
    beforeEach(() => {
        mockUserGateway = {
            getUserByEmail: jest.fn(),
        };
        mockErrorFormatter = {
            genericError: jest.fn(),
        };
        mockEncrypt = {
            comparePassword: jest.fn(),
        };
        mockTokenService = {
            createAccessToken: jest.fn(),
            verifyAccessToken: jest.fn(),
        };
        authUCAdapter = new AuthUCAdapter_1.AuthUCAdapter(mockUserGateway, mockErrorFormatter, mockEncrypt, mockTokenService);
    });
    describe("login", () => {
        it("debería retornar token y datos del usuario cuando las credenciales son correctas", () => __awaiter(void 0, void 0, void 0, function* () {
            // Arrange
            const mockUser = {
                usuID: "user1",
                usuEmail: "test@test.com",
                usuPassword: "hashedPassword",
                usuRole: "professor",
            };
            const mockToken = "jwt-token-123";
            mockUserGateway.getUserByEmail.mockResolvedValue(mockUser);
            mockEncrypt.comparePassword.mockResolvedValue(true);
            mockTokenService.createAccessToken.mockResolvedValue(mockToken);
            // Act
            const result = yield authUCAdapter.login("test@test.com", "password123");
            // Assert
            expect(result).toEqual({
                usuID: "user1",
                usuRole: "professor",
                token: mockToken,
            });
            expect(mockUserGateway.getUserByEmail).toHaveBeenCalledWith("test@test.com");
            expect(mockEncrypt.comparePassword).toHaveBeenCalledWith("password123", "hashedPassword");
            expect(mockTokenService.createAccessToken).toHaveBeenCalledWith({
                usuID: "user1",
                usuRole: "professor",
            });
        }));
        it("debería lanzar error cuando el usuario no existe", () => __awaiter(void 0, void 0, void 0, function* () {
            // Arrange
            mockUserGateway.getUserByEmail.mockResolvedValue(null);
            // Act
            const result = yield authUCAdapter.login("wrong@test.com", "password123");
            // Assert
            expect(result).toBeNull();
            expect(mockErrorFormatter.genericError).toHaveBeenCalledWith("Credenciales incorrectas");
        }));
        it("debería lanzar error cuando la contraseña es incorrecta", () => __awaiter(void 0, void 0, void 0, function* () {
            // Arrange
            const mockUser = {
                usuID: "user1",
                usuEmail: "test@test.com",
                usuPassword: "hashedPassword",
                usuRole: "professor",
            };
            mockUserGateway.getUserByEmail.mockResolvedValue(mockUser);
            mockEncrypt.comparePassword.mockResolvedValue(false);
            // Act
            const result = yield authUCAdapter.login("test@test.com", "wrongPassword");
            // Assert
            expect(result).toBeNull();
            expect(mockErrorFormatter.genericError).toHaveBeenCalledWith("Credenciales incorrectas");
        }));
    });
    describe("verifyToken", () => {
        it("debería retornar los datos del token cuando es válido", () => __awaiter(void 0, void 0, void 0, function* () {
            // Arrange
            const mockPayload = { usuID: "user1", usuRole: "professor" };
            mockTokenService.verifyAccessToken.mockResolvedValue(mockPayload);
            // Act
            const result = yield authUCAdapter.verifyToken("valid-token");
            // Assert
            expect(result).toEqual(mockPayload);
            expect(mockTokenService.verifyAccessToken).toHaveBeenCalledWith("valid-token");
        }));
        it("debería retornar null cuando el token es inválido", () => __awaiter(void 0, void 0, void 0, function* () {
            // Arrange
            mockTokenService.verifyAccessToken.mockResolvedValue(null);
            // Act
            const result = yield authUCAdapter.verifyToken("invalid-token");
            // Assert
            expect(result).toBeNull();
        }));
    });
});
