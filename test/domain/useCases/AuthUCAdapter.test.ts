import { AuthUCAdapter } from "../../../src/domain/useCases/AuthUCAdapter";
import { UserGatewayIntPort } from "../../../src/application/output/UserGatewayIntPort";
import { ErrorFormatterIntPort } from "../../../src/application/output/ErrorFormaterIntPort";
import { EncryptIntPort } from "../../../src/application/output/EncryptIntPort";
import { AuthIntPort } from "../../../src/application/output/AuthIntPort";
import { User } from "../../../src/domain/models/UserModel";

describe("AuthUCAdapter", () => {
  let authUCAdapter: AuthUCAdapter;
  let mockUserGateway: jest.Mocked<UserGatewayIntPort>;
  let mockErrorFormatter: jest.Mocked<ErrorFormatterIntPort>;
  let mockEncrypt: jest.Mocked<EncryptIntPort>;
  let mockTokenService: jest.Mocked<AuthIntPort>;

  beforeEach(() => {
    mockUserGateway = {
      getUserByEmail: jest.fn(),
    } as any;

    mockErrorFormatter = {
      genericError: jest.fn(),
    } as any;

    mockEncrypt = {
      comparePassword: jest.fn(),
    } as any;

    mockTokenService = {
      createAccessToken: jest.fn(),
      verifyAccessToken: jest.fn(),
    } as any;

    authUCAdapter = new AuthUCAdapter(
      mockUserGateway,
      mockErrorFormatter,
      mockEncrypt,
      mockTokenService
    );
  });

  describe("login", () => {
    it("debería retornar token y datos del usuario cuando las credenciales son correctas", async () => {
      // Arrange
      const mockUser: User = {
        usuID: "user1",
        usuEmail: "test@test.com",
        usuPassword: "hashedPassword",
        usuRole: "professor",
      } as User;
      const mockToken = "jwt-token-123";

      mockUserGateway.getUserByEmail.mockResolvedValue(mockUser);
      mockEncrypt.comparePassword.mockResolvedValue(true);
      mockTokenService.createAccessToken.mockResolvedValue(mockToken);

      // Act
      const result = await authUCAdapter.login("test@test.com", "password123");

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
    });

    it("debería lanzar error cuando el usuario no existe", async () => {
      // Arrange
      mockUserGateway.getUserByEmail.mockResolvedValue(null);

      // Act
      const result = await authUCAdapter.login("wrong@test.com", "password123");

      // Assert
      expect(result).toBeNull();
      expect(mockErrorFormatter.genericError).toHaveBeenCalledWith("Credenciales incorrectas");
    });

    it("debería lanzar error cuando la contraseña es incorrecta", async () => {
      // Arrange
      const mockUser: User = {
        usuID: "user1",
        usuEmail: "test@test.com",
        usuPassword: "hashedPassword",
        usuRole: "professor",
      } as User;

      mockUserGateway.getUserByEmail.mockResolvedValue(mockUser);
      mockEncrypt.comparePassword.mockResolvedValue(false);

      // Act
      const result = await authUCAdapter.login("test@test.com", "wrongPassword");

      // Assert
      expect(result).toBeNull();
      expect(mockErrorFormatter.genericError).toHaveBeenCalledWith("Credenciales incorrectas");
    });
  });

  describe("verifyToken", () => {
    it("debería retornar los datos del token cuando es válido", async () => {
      // Arrange
      const mockPayload = { usuID: "user1", usuRole: "professor" };
      mockTokenService.verifyAccessToken.mockResolvedValue(mockPayload);

      // Act
      const result = await authUCAdapter.verifyToken("valid-token");

      // Assert
      expect(result).toEqual(mockPayload);
      expect(mockTokenService.verifyAccessToken).toHaveBeenCalledWith("valid-token");
    });

    it("debería retornar null cuando el token es inválido", async () => {
      // Arrange
      mockTokenService.verifyAccessToken.mockResolvedValue(null);

      // Act
      const result = await authUCAdapter.verifyToken("invalid-token");

      // Assert
      expect(result).toBeNull();
    });
  });
});
