import { AuthAdapter } from "../../../src/infrastructure/output/auth/AuthAdapter";
import jwt from "jsonwebtoken";
import { env } from "../../../src/config/env";

// Mock de jsonwebtoken
jest.mock("jsonwebtoken");

// Mock de env
jest.mock("../../../src/config/env", () => ({
    env: {
        jwtSecret: "test-secret-key-for-testing",
    },
}));

describe("AuthAdapter", () => {
    let authAdapter: AuthAdapter;
    let mockJwt: jest.Mocked<typeof jwt>;

    beforeEach(() => {
        authAdapter = new AuthAdapter();
        mockJwt = jwt as jest.Mocked<typeof jwt>;
        jest.clearAllMocks();
    });

    describe("createAccessToken", () => {
        it("debería crear un token exitosamente con datos válidos (caso normal)", async () => {
            // Arrange
            const userData = {
                usuID: "user-123",
                usuEmail: "test@example.com",
                usuRole: "professor",
            };
            const expectedToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.test.token";
            
            mockJwt.sign.mockImplementation((payload, secret, options, callback: any) => {
                callback(null, expectedToken);
            });

            // Act
            const result = await authAdapter.createAccessToken(userData);

            // Assert
            expect(mockJwt.sign).toHaveBeenCalledWith(
                userData,
                env.jwtSecret,
                { expiresIn: "1d" },
                expect.any(Function)
            );
            expect(result).toBe(expectedToken);
        });

        it("debería crear un token para un usuario administrador (caso normal)", async () => {
            // Arrange
            const adminData = {
                usuID: "admin-456",
                usuEmail: "admin@example.com",
                usuRole: "admin",
            };
            const expectedToken = "admin.jwt.token";
            
            mockJwt.sign.mockImplementation((payload, secret, options, callback: any) => {
                callback(null, expectedToken);
            });

            // Act
            const result = await authAdapter.createAccessToken(adminData);

            // Assert
            expect(result).toBe(expectedToken);
        });

        it("debería crear un token con datos mínimos (caso límite)", async () => {
            // Arrange
            const minimalData = { id: "1" };
            const expectedToken = "minimal.token";
            
            mockJwt.sign.mockImplementation((payload, secret, options, callback: any) => {
                callback(null, expectedToken);
            });

            // Act
            const result = await authAdapter.createAccessToken(minimalData);

            // Assert
            expect(result).toBe(expectedToken);
        });

        it("debería crear un token con datos complejos (caso normal)", async () => {
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
            
            mockJwt.sign.mockImplementation((payload, secret, options, callback: any) => {
                callback(null, expectedToken);
            });

            // Act
            const result = await authAdapter.createAccessToken(complexData);

            // Assert
            expect(result).toBe(expectedToken);
        });

        it("debería rechazar cuando jwt.sign falla (caso límite)", async () => {
            // Arrange
            const userData = { usuID: "error-user" };
            const errorMessage = "JWT signing failed";
            
            mockJwt.sign.mockImplementation((payload, secret, options, callback: any) => {
                callback(new Error(errorMessage), undefined);
            });

            // Act & Assert
            await expect(
                authAdapter.createAccessToken(userData)
            ).rejects.toThrow(errorMessage);
        });

        it("debería rechazar cuando el token es undefined (caso límite)", async () => {
            // Arrange
            const userData = { usuID: "undefined-token-user" };
            
            mockJwt.sign.mockImplementation((payload, secret, options, callback: any) => {
                callback(null, undefined);
            });

            // Act & Assert
            await expect(
                authAdapter.createAccessToken(userData)
            ).rejects.toThrow("Token generation failed");
        });

        it("debería crear un token con objeto vacío (caso límite)", async () => {
            // Arrange
            const emptyData = {};
            const expectedToken = "empty.data.token";
            
            mockJwt.sign.mockImplementation((payload, secret, options, callback: any) => {
                callback(null, expectedToken);
            });

            // Act
            const result = await authAdapter.createAccessToken(emptyData);

            // Assert
            expect(result).toBe(expectedToken);
        });

        it("debería crear un token con datos muy grandes (caso límite)", async () => {
            // Arrange
            const largeData = {
                usuID: "large-data-user",
                largeField: "A".repeat(10000),
                arrayField: Array.from({ length: 100 }, (_, i) => i),
            };
            const expectedToken = "large.data.token";
            
            mockJwt.sign.mockImplementation((payload, secret, options, callback: any) => {
                callback(null, expectedToken);
            });

            // Act
            const result = await authAdapter.createAccessToken(largeData);

            // Assert
            expect(result).toBe(expectedToken);
        });
    });

    describe("verifyAccessToken", () => {
        it("debería verificar y decodificar un token válido (caso normal)", async () => {
            // Arrange
            const validToken = "valid.jwt.token";
            const decodedData = {
                usuID: "user-123",
                usuEmail: "test@example.com",
                usuRole: "professor",
                iat: 1696800000,
                exp: 1696886400,
            };
            
            mockJwt.verify.mockImplementation((token, secret, callback: any) => {
                callback(null, decodedData);
            });

            // Act
            const result = await authAdapter.verifyAccessToken(validToken);

            // Assert
            expect(mockJwt.verify).toHaveBeenCalledWith(
                validToken,
                env.jwtSecret,
                expect.any(Function)
            );
            expect(result).toEqual(decodedData);
            expect(result.usuID).toBe("user-123");
            expect(result.usuRole).toBe("professor");
        });

        it("debería verificar un token de administrador (caso normal)", async () => {
            // Arrange
            const adminToken = "admin.jwt.token";
            const decodedAdmin = {
                usuID: "admin-456",
                usuEmail: "admin@example.com",
                usuRole: "admin",
                iat: 1696800000,
                exp: 1696886400,
            };
            
            mockJwt.verify.mockImplementation((token, secret, callback: any) => {
                callback(null, decodedAdmin);
            });

            // Act
            const result = await authAdapter.verifyAccessToken(adminToken);

            // Assert
            expect(result.usuRole).toBe("admin");
        });

        it("debería retornar null cuando el token es inválido (caso límite)", async () => {
            // Arrange
            const invalidToken = "invalid.token";
            
            mockJwt.verify.mockImplementation((token, secret, callback: any) => {
                callback(new Error("Invalid token"), undefined);
            });

            // Act
            const result = await authAdapter.verifyAccessToken(invalidToken);

            // Assert
            expect(mockJwt.verify).toHaveBeenCalledWith(
                invalidToken,
                env.jwtSecret,
                expect.any(Function)
            );
            expect(result).toBeNull();
        });

        it("debería retornar null cuando el token está expirado (caso límite)", async () => {
            // Arrange
            const expiredToken = "expired.jwt.token";
            
            mockJwt.verify.mockImplementation((token, secret, callback: any) => {
                callback(new Error("jwt expired"), undefined);
            });

            // Act
            const result = await authAdapter.verifyAccessToken(expiredToken);

            // Assert
            expect(result).toBeNull();
        });

        it("debería retornar null cuando el token tiene firma inválida (caso límite)", async () => {
            // Arrange
            const malformedToken = "malformed.signature.token";
            
            mockJwt.verify.mockImplementation((token, secret, callback: any) => {
                callback(new Error("invalid signature"), undefined);
            });

            // Act
            const result = await authAdapter.verifyAccessToken(malformedToken);

            // Assert
            expect(result).toBeNull();
        });

        it("debería manejar token vacío (caso límite)", async () => {
            // Arrange
            const emptyToken = "";
            
            mockJwt.verify.mockImplementation((token, secret, callback: any) => {
                callback(new Error("jwt must be provided"), undefined);
            });

            // Act
            const result = await authAdapter.verifyAccessToken(emptyToken);

            // Assert
            expect(result).toBeNull();
        });

        it("debería manejar token muy largo (caso límite)", async () => {
            // Arrange
            const longToken = "a".repeat(10000);
            
            mockJwt.verify.mockImplementation((token, secret, callback: any) => {
                callback(new Error("invalid token"), undefined);
            });

            // Act
            const result = await authAdapter.verifyAccessToken(longToken);

            // Assert
            expect(result).toBeNull();
        });

        it("debería manejar token malformado sin puntos (caso límite)", async () => {
            // Arrange
            const malformedToken = "tokensinpuntos";
            
            mockJwt.verify.mockImplementation((token, secret, callback: any) => {
                callback(new Error("jwt malformed"), undefined);
            });

            // Act
            const result = await authAdapter.verifyAccessToken(malformedToken);

            // Assert
            expect(result).toBeNull();
        });

        it("debería decodificar token con datos complejos (caso normal)", async () => {
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
            
            mockJwt.verify.mockImplementation((token, secret, callback: any) => {
                callback(null, complexDecoded);
            });

            // Act
            const result = await authAdapter.verifyAccessToken(complexToken);

            // Assert
            expect(result).toEqual(complexDecoded);
            expect(result.permissions).toEqual(["read", "write"]);
            expect(result.metadata.department).toBe("Finanzas");
        });

        it("debería manejar error genérico de verificación (caso límite)", async () => {
            // Arrange
            const errorToken = "error.token";
            
            mockJwt.verify.mockImplementation((token, secret, callback: any) => {
                callback(new Error("Unknown verification error"), undefined);
            });

            // Act
            const result = await authAdapter.verifyAccessToken(errorToken);

            // Assert
            expect(result).toBeNull();
        });
    });

    describe("Integración createAccessToken y verifyAccessToken", () => {
        it("debería crear y verificar un token correctamente (caso de integración)", async () => {
            // Arrange
            const userData = {
                usuID: "integration-123",
                usuEmail: "integration@example.com",
                usuRole: "professor",
            };
            const generatedToken = "integration.jwt.token";
            
            // Mock para crear token
            mockJwt.sign.mockImplementation((payload, secret, options, callback: any) => {
                callback(null, generatedToken);
            });
            
            // Mock para verificar token
            mockJwt.verify.mockImplementation((token, secret, callback: any) => {
                if (token === generatedToken) {
                    callback(null, { ...userData, iat: 1696800000, exp: 1696886400 });
                } else {
                    callback(new Error("Invalid token"), undefined);
                }
            });

            // Act
            const createdToken = await authAdapter.createAccessToken(userData);
            const verifiedData = await authAdapter.verifyAccessToken(createdToken);

            // Assert
            expect(createdToken).toBe(generatedToken);
            expect(verifiedData).not.toBeNull();
            expect(verifiedData.usuID).toBe(userData.usuID);
            expect(verifiedData.usuEmail).toBe(userData.usuEmail);
            expect(verifiedData.usuRole).toBe(userData.usuRole);
        });

        it("debería rechazar token modificado (caso de seguridad)", async () => {
            // Arrange
            const userData = { usuID: "security-test" };
            const validToken = "valid.token";
            const tamperedToken = "tampered.token";
            
            mockJwt.sign.mockImplementation((payload, secret, options, callback: any) => {
                callback(null, validToken);
            });
            
            mockJwt.verify.mockImplementation((token, secret, callback: any) => {
                if (token === validToken) {
                    callback(null, userData);
                } else {
                    callback(new Error("invalid signature"), undefined);
                }
            });

            // Act
            const createdToken = await authAdapter.createAccessToken(userData);
            const verifiedValid = await authAdapter.verifyAccessToken(createdToken);
            const verifiedTampered = await authAdapter.verifyAccessToken(tamperedToken);

            // Assert
            expect(verifiedValid).not.toBeNull();
            expect(verifiedTampered).toBeNull();
        });
    });
});
