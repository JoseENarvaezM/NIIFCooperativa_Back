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
const AuthAdapter_1 = require("../../../src/infrastructure/output/auth/AuthAdapter");
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const env_1 = require("../../../src/config/env");
// Mock de jsonwebtoken
jest.mock("jsonwebtoken");
// Mock de env
jest.mock("../../../src/config/env", () => ({
    env: {
        jwtSecret: "test-secret-key-for-testing",
    },
}));
describe("AuthAdapter", () => {
    let authAdapter;
    let mockJwt;
    beforeEach(() => {
        authAdapter = new AuthAdapter_1.AuthAdapter();
        mockJwt = jsonwebtoken_1.default;
        jest.clearAllMocks();
    });
    describe("createAccessToken", () => {
        it("debería crear un token exitosamente con datos válidos (caso normal)", () => __awaiter(void 0, void 0, void 0, function* () {
            // Arrange
            const userData = {
                usuID: "user-123",
                usuEmail: "test@example.com",
                usuRole: "professor",
            };
            const expectedToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.test.token";
            mockJwt.sign.mockImplementation((payload, secret, options, callback) => {
                callback(null, expectedToken);
            });
            // Act
            const result = yield authAdapter.createAccessToken(userData);
            // Assert
            expect(mockJwt.sign).toHaveBeenCalledWith(userData, env_1.env.jwtSecret, { expiresIn: "1d" }, expect.any(Function));
            expect(result).toBe(expectedToken);
        }));
        it("debería crear un token para un usuario administrador (caso normal)", () => __awaiter(void 0, void 0, void 0, function* () {
            // Arrange
            const adminData = {
                usuID: "admin-456",
                usuEmail: "admin@example.com",
                usuRole: "admin",
            };
            const expectedToken = "admin.jwt.token";
            mockJwt.sign.mockImplementation((payload, secret, options, callback) => {
                callback(null, expectedToken);
            });
            // Act
            const result = yield authAdapter.createAccessToken(adminData);
            // Assert
            expect(result).toBe(expectedToken);
        }));
        it("debería crear un token con datos mínimos (caso límite)", () => __awaiter(void 0, void 0, void 0, function* () {
            // Arrange
            const minimalData = { id: "1" };
            const expectedToken = "minimal.token";
            mockJwt.sign.mockImplementation((payload, secret, options, callback) => {
                callback(null, expectedToken);
            });
            // Act
            const result = yield authAdapter.createAccessToken(minimalData);
            // Assert
            expect(result).toBe(expectedToken);
        }));
        it("debería crear un token con datos complejos (caso normal)", () => __awaiter(void 0, void 0, void 0, function* () {
            // Arrange
            const complexData = {
                usuID: "complex-789",
                usuName: "Usuario Complejo",
                usuEmail: "complejo@example.com",
                usuRole: "professor",
                permissions: ["read", "write", "delete"],
                metadata: {
                    lastLogin: new Date("2025-10-09"),
                    department: "Contabilidad",
                },
            };
            const expectedToken = "complex.jwt.token";
            mockJwt.sign.mockImplementation((payload, secret, options, callback) => {
                callback(null, expectedToken);
            });
            // Act
            const result = yield authAdapter.createAccessToken(complexData);
            // Assert
            expect(result).toBe(expectedToken);
        }));
        it("debería rechazar cuando jwt.sign falla (caso límite)", () => __awaiter(void 0, void 0, void 0, function* () {
            // Arrange
            const userData = { usuID: "error-user" };
            const errorMessage = "JWT signing failed";
            mockJwt.sign.mockImplementation((payload, secret, options, callback) => {
                callback(new Error(errorMessage), undefined);
            });
            // Act & Assert
            yield expect(authAdapter.createAccessToken(userData)).rejects.toThrow(errorMessage);
        }));
        it("debería rechazar cuando el token es undefined (caso límite)", () => __awaiter(void 0, void 0, void 0, function* () {
            // Arrange
            const userData = { usuID: "undefined-token-user" };
            mockJwt.sign.mockImplementation((payload, secret, options, callback) => {
                callback(null, undefined);
            });
            // Act & Assert
            yield expect(authAdapter.createAccessToken(userData)).rejects.toThrow("Token generation failed");
        }));
        it("debería crear un token con objeto vacío (caso límite)", () => __awaiter(void 0, void 0, void 0, function* () {
            // Arrange
            const emptyData = {};
            const expectedToken = "empty.data.token";
            mockJwt.sign.mockImplementation((payload, secret, options, callback) => {
                callback(null, expectedToken);
            });
            // Act
            const result = yield authAdapter.createAccessToken(emptyData);
            // Assert
            expect(result).toBe(expectedToken);
        }));
        it("debería crear un token con datos muy grandes (caso límite)", () => __awaiter(void 0, void 0, void 0, function* () {
            // Arrange
            const largeData = {
                usuID: "large-data-user",
                largeField: "A".repeat(10000),
                arrayField: Array.from({ length: 100 }, (_, i) => i),
            };
            const expectedToken = "large.data.token";
            mockJwt.sign.mockImplementation((payload, secret, options, callback) => {
                callback(null, expectedToken);
            });
            // Act
            const result = yield authAdapter.createAccessToken(largeData);
            // Assert
            expect(result).toBe(expectedToken);
        }));
    });
    describe("verifyAccessToken", () => {
        it("debería verificar y decodificar un token válido (caso normal)", () => __awaiter(void 0, void 0, void 0, function* () {
            // Arrange
            const validToken = "valid.jwt.token";
            const decodedData = {
                usuID: "user-123",
                usuEmail: "test@example.com",
                usuRole: "professor",
                iat: 1696800000,
                exp: 1696886400,
            };
            mockJwt.verify.mockImplementation((token, secret, callback) => {
                callback(null, decodedData);
            });
            // Act
            const result = yield authAdapter.verifyAccessToken(validToken);
            // Assert
            expect(mockJwt.verify).toHaveBeenCalledWith(validToken, env_1.env.jwtSecret, expect.any(Function));
            expect(result).toEqual(decodedData);
            expect(result.usuID).toBe("user-123");
            expect(result.usuRole).toBe("professor");
        }));
        it("debería verificar un token de administrador (caso normal)", () => __awaiter(void 0, void 0, void 0, function* () {
            // Arrange
            const adminToken = "admin.jwt.token";
            const decodedAdmin = {
                usuID: "admin-456",
                usuEmail: "admin@example.com",
                usuRole: "admin",
                iat: 1696800000,
                exp: 1696886400,
            };
            mockJwt.verify.mockImplementation((token, secret, callback) => {
                callback(null, decodedAdmin);
            });
            // Act
            const result = yield authAdapter.verifyAccessToken(adminToken);
            // Assert
            expect(result.usuRole).toBe("admin");
        }));
        it("debería retornar null cuando el token es inválido (caso límite)", () => __awaiter(void 0, void 0, void 0, function* () {
            // Arrange
            const invalidToken = "invalid.token";
            mockJwt.verify.mockImplementation((token, secret, callback) => {
                callback(new Error("Invalid token"), undefined);
            });
            // Act
            const result = yield authAdapter.verifyAccessToken(invalidToken);
            // Assert
            expect(mockJwt.verify).toHaveBeenCalledWith(invalidToken, env_1.env.jwtSecret, expect.any(Function));
            expect(result).toBeNull();
        }));
        it("debería retornar null cuando el token está expirado (caso límite)", () => __awaiter(void 0, void 0, void 0, function* () {
            // Arrange
            const expiredToken = "expired.jwt.token";
            mockJwt.verify.mockImplementation((token, secret, callback) => {
                callback(new Error("jwt expired"), undefined);
            });
            // Act
            const result = yield authAdapter.verifyAccessToken(expiredToken);
            // Assert
            expect(result).toBeNull();
        }));
        it("debería retornar null cuando el token tiene firma inválida (caso límite)", () => __awaiter(void 0, void 0, void 0, function* () {
            // Arrange
            const malformedToken = "malformed.signature.token";
            mockJwt.verify.mockImplementation((token, secret, callback) => {
                callback(new Error("invalid signature"), undefined);
            });
            // Act
            const result = yield authAdapter.verifyAccessToken(malformedToken);
            // Assert
            expect(result).toBeNull();
        }));
        it("debería manejar token vacío (caso límite)", () => __awaiter(void 0, void 0, void 0, function* () {
            // Arrange
            const emptyToken = "";
            mockJwt.verify.mockImplementation((token, secret, callback) => {
                callback(new Error("jwt must be provided"), undefined);
            });
            // Act
            const result = yield authAdapter.verifyAccessToken(emptyToken);
            // Assert
            expect(result).toBeNull();
        }));
        it("debería manejar token muy largo (caso límite)", () => __awaiter(void 0, void 0, void 0, function* () {
            // Arrange
            const longToken = "a".repeat(10000);
            mockJwt.verify.mockImplementation((token, secret, callback) => {
                callback(new Error("invalid token"), undefined);
            });
            // Act
            const result = yield authAdapter.verifyAccessToken(longToken);
            // Assert
            expect(result).toBeNull();
        }));
        it("debería manejar token malformado sin puntos (caso límite)", () => __awaiter(void 0, void 0, void 0, function* () {
            // Arrange
            const malformedToken = "tokensinpuntos";
            mockJwt.verify.mockImplementation((token, secret, callback) => {
                callback(new Error("jwt malformed"), undefined);
            });
            // Act
            const result = yield authAdapter.verifyAccessToken(malformedToken);
            // Assert
            expect(result).toBeNull();
        }));
        it("debería decodificar token con datos complejos (caso normal)", () => __awaiter(void 0, void 0, void 0, function* () {
            // Arrange
            const complexToken = "complex.jwt.token";
            const complexDecoded = {
                usuID: "complex-789",
                usuName: "Usuario Complejo",
                usuEmail: "complejo@example.com",
                usuRole: "professor",
                permissions: ["read", "write"],
                metadata: { department: "Finanzas" },
                iat: 1696800000,
                exp: 1696886400,
            };
            mockJwt.verify.mockImplementation((token, secret, callback) => {
                callback(null, complexDecoded);
            });
            // Act
            const result = yield authAdapter.verifyAccessToken(complexToken);
            // Assert
            expect(result).toEqual(complexDecoded);
            expect(result.permissions).toEqual(["read", "write"]);
            expect(result.metadata.department).toBe("Finanzas");
        }));
        it("debería manejar error genérico de verificación (caso límite)", () => __awaiter(void 0, void 0, void 0, function* () {
            // Arrange
            const errorToken = "error.token";
            mockJwt.verify.mockImplementation((token, secret, callback) => {
                callback(new Error("Unknown verification error"), undefined);
            });
            // Act
            const result = yield authAdapter.verifyAccessToken(errorToken);
            // Assert
            expect(result).toBeNull();
        }));
    });
    describe("Integración createAccessToken y verifyAccessToken", () => {
        it("debería crear y verificar un token correctamente (caso de integración)", () => __awaiter(void 0, void 0, void 0, function* () {
            // Arrange
            const userData = {
                usuID: "integration-123",
                usuEmail: "integration@example.com",
                usuRole: "professor",
            };
            const generatedToken = "integration.jwt.token";
            // Mock para crear token
            mockJwt.sign.mockImplementation((payload, secret, options, callback) => {
                callback(null, generatedToken);
            });
            // Mock para verificar token
            mockJwt.verify.mockImplementation((token, secret, callback) => {
                if (token === generatedToken) {
                    callback(null, Object.assign(Object.assign({}, userData), { iat: 1696800000, exp: 1696886400 }));
                }
                else {
                    callback(new Error("Invalid token"), undefined);
                }
            });
            // Act
            const createdToken = yield authAdapter.createAccessToken(userData);
            const verifiedData = yield authAdapter.verifyAccessToken(createdToken);
            // Assert
            expect(createdToken).toBe(generatedToken);
            expect(verifiedData).not.toBeNull();
            expect(verifiedData.usuID).toBe(userData.usuID);
            expect(verifiedData.usuEmail).toBe(userData.usuEmail);
            expect(verifiedData.usuRole).toBe(userData.usuRole);
        }));
        it("debería rechazar token modificado (caso de seguridad)", () => __awaiter(void 0, void 0, void 0, function* () {
            // Arrange
            const userData = { usuID: "security-test" };
            const validToken = "valid.token";
            const tamperedToken = "tampered.token";
            mockJwt.sign.mockImplementation((payload, secret, options, callback) => {
                callback(null, validToken);
            });
            mockJwt.verify.mockImplementation((token, secret, callback) => {
                if (token === validToken) {
                    callback(null, userData);
                }
                else {
                    callback(new Error("invalid signature"), undefined);
                }
            });
            // Act
            const createdToken = yield authAdapter.createAccessToken(userData);
            const verifiedValid = yield authAdapter.verifyAccessToken(createdToken);
            const verifiedTampered = yield authAdapter.verifyAccessToken(tamperedToken);
            // Assert
            expect(verifiedValid).not.toBeNull();
            expect(verifiedTampered).toBeNull();
        }));
    });
});
