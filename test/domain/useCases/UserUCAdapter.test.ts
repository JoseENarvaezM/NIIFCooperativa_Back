import { UserUCAdapter } from "../../../src/domain/useCases/UserUCAdapter";
import { UserGatewayIntPort } from "../../../src/application/output/UserGatewayIntPort";
import { ErrorFormatterIntPort } from "../../../src/application/output/ErrorFormaterIntPort";
import { EncryptIntPort } from "../../../src/application/output/EncryptIntPort";
import { User } from "../../../src/domain/models/UserModel";

describe("UserUCAdapter", () => {
  let userUCAdapter: UserUCAdapter;
  let mockUserGateway: jest.Mocked<UserGatewayIntPort>;
  let mockErrorFormatter: jest.Mocked<ErrorFormatterIntPort>;
  let mockEncrypt: jest.Mocked<EncryptIntPort>;

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
    } as jest.Mocked<UserGatewayIntPort>;

    mockErrorFormatter = {
      errorNotFound: jest.fn(),
      errorExistsEntity: jest.fn(),
      genericError: jest.fn(),
    } as jest.Mocked<ErrorFormatterIntPort>;

    mockEncrypt = {
      hashPassword: jest.fn(),
      comparePassword: jest.fn(),
    } as jest.Mocked<EncryptIntPort>;

    userUCAdapter = new UserUCAdapter(mockUserGateway, mockErrorFormatter, mockEncrypt);
  });

  describe("getUserById", () => {
    it("debería retornar el usuario sin contraseña cuando existe", async () => {
      // Arrange
      const mockUser: User = {
        usuID: "user1",
        usuName: "Test User",
        usuEmail: "test@test.com",
        usuPassword: "hashed123",
        usuRole: "professor",
        room: [],
      };
      mockUserGateway.getUserById.mockResolvedValue(mockUser);

      // Act
      const result = await userUCAdapter.getUserById("user1");

      // Assert
      expect(result).toEqual({ ...mockUser, usuPassword: "" });
      expect(mockUserGateway.getUserById).toHaveBeenCalledWith("user1");
    });

    it("debería lanzar error cuando el usuario no existe", async () => {
      // Arrange
      mockUserGateway.getUserById.mockResolvedValue(null);

      // Act
      const result = await userUCAdapter.getUserById("user999");

      // Assert
      expect(result).toBeNull();
      expect(mockErrorFormatter.errorNotFound).toHaveBeenCalledWith("Usuario con id user999 no existe.");
    });
  });

  describe("deleteUserById", () => {
    it("debería eliminar el usuario cuando existe", async () => {
      // Arrange
      const mockUser: User = { usuID: "user1" } as User;
      mockUserGateway.getUserById.mockResolvedValue(mockUser);

      // Act
      await userUCAdapter.deleteUserById("user1");

      // Assert
      expect(mockUserGateway.deleteUserById).toHaveBeenCalledWith("user1");
    });

    it("debería lanzar error cuando el usuario no existe", async () => {
      // Arrange
      mockUserGateway.getUserById.mockResolvedValue(null);

      // Act
      await userUCAdapter.deleteUserById("user999");

      // Assert
      expect(mockErrorFormatter.errorNotFound).toHaveBeenCalledWith("Usuario con id user999 no existe.");
    });
  });

  describe("changeUserPassword", () => {
    it("debería cambiar la contraseña cuando la contraseña vieja es correcta", async () => {
      // Arrange
      const mockUser: User = {
        usuID: "user1",
        usuPassword: "oldHashedPassword",
      } as User;
      mockUserGateway.getUserById.mockResolvedValue(mockUser);
      mockEncrypt.comparePassword.mockResolvedValue(true);
      mockEncrypt.hashPassword.mockResolvedValue("newHashedPassword");

      // Act
      await userUCAdapter.changeUserPassword("user1", "newPassword", "oldPassword");

      // Assert
      expect(mockEncrypt.comparePassword).toHaveBeenCalledWith("oldPassword", "oldHashedPassword");
      expect(mockEncrypt.hashPassword).toHaveBeenCalledWith("newPassword");
      expect(mockUserGateway.updateUser).toHaveBeenCalled();
    });

    it("debería lanzar error cuando la contraseña vieja es incorrecta", async () => {
      // Arrange
      const mockUser: User = {
        usuID: "user1",
        usuPassword: "oldHashedPassword",
      } as User;
      mockUserGateway.getUserById.mockResolvedValue(mockUser);
      mockEncrypt.comparePassword.mockResolvedValue(false);

      // Act
      await userUCAdapter.changeUserPassword("user1", "newPassword", "wrongPassword");

      // Assert
      expect(mockErrorFormatter.genericError).toHaveBeenCalledWith("La contraseña vieja es incorrecta.");
    });

    it("debería lanzar error cuando el usuario no existe", async () => {
      // Arrange
      mockUserGateway.getUserById.mockResolvedValue(null);

      // Act
      await userUCAdapter.changeUserPassword("user999", "newPassword", "oldPassword");

      // Assert
      expect(mockErrorFormatter.errorNotFound).toHaveBeenCalledWith("Usuario con id user999 no existe.");
    });
  });

  describe("createUser", () => {
    it("debería crear un usuario cuando el email no existe", async () => {
      // Arrange
      const mockUser: User = {
        usuID: "user1",
        usuName: "Test User",
        usuEmail: "test@test.com",
        usuPassword: "password123",
        usuRole: "professor",
        room: [],
      };
      mockUserGateway.existByEmail.mockResolvedValue(false);
      mockEncrypt.hashPassword.mockResolvedValue("hashedPassword");
      mockUserGateway.createUser.mockResolvedValue({ ...mockUser, usuPassword: "hashedPassword" });

      // Act
      const result = await userUCAdapter.createUser(mockUser);

      // Assert
      expect(mockEncrypt.hashPassword).toHaveBeenCalledWith("password123");
      expect(mockUserGateway.createUser).toHaveBeenCalled();
      expect(result).not.toBeNull();
    });

    it("debería lanzar error cuando el email ya existe", async () => {
      // Arrange
      const mockUser: User = {
        usuEmail: "existing@test.com",
      } as User;
      mockUserGateway.existByEmail.mockResolvedValue(true);

      // Act
      const result = await userUCAdapter.createUser(mockUser);

      // Assert
      expect(result).toBeNull();
      expect(mockErrorFormatter.errorExistsEntity).toHaveBeenCalledWith(
        "Usuario con email existing@test.com ya existe."
      );
    });
  });

  describe("updateUser", () => {
    it("debería actualizar el usuario cuando existe y el email no cambia", async () => {
      // Arrange
      const existingUser: User = {
        usuID: "user1",
        usuEmail: "test@test.com",
        usuPassword: "oldPassword",
      } as User;
      const updatedUser: User = {
        usuID: "user1",
        usuEmail: "test@test.com",
        usuPassword: "newPassword",
      } as User;
      mockUserGateway.getUserById.mockResolvedValue(existingUser);
      mockEncrypt.hashPassword.mockResolvedValue("hashedNewPassword");
      mockUserGateway.updateUser.mockResolvedValue({ ...updatedUser, usuPassword: "hashedNewPassword" });

      // Act
      const result = await userUCAdapter.updateUser("user1", updatedUser);

      // Assert
      expect(mockUserGateway.updateUser).toHaveBeenCalled();
      expect(result).not.toBeNull();
    });

    it("debería validar el nuevo email cuando cambia", async () => {
      // Arrange
      const existingUser: User = {
        usuID: "user1",
        usuEmail: "old@test.com",
        usuPassword: "oldPassword",
      } as User;
      const updatedUser: User = {
        usuID: "user1",
        usuEmail: "new@test.com",
        usuPassword: "",
      } as User;
      mockUserGateway.getUserById.mockResolvedValue(existingUser);
      mockUserGateway.existByEmail.mockResolvedValue(false);
      mockUserGateway.updateUser.mockResolvedValue(updatedUser);

      // Act
      const result = await userUCAdapter.updateUser("user1", updatedUser);

      // Assert
      expect(mockUserGateway.existByEmail).toHaveBeenCalledWith("new@test.com");
      expect(result).not.toBeNull();
    });

    it("debería lanzar error cuando el usuario no existe", async () => {
      // Arrange
      mockUserGateway.getUserById.mockResolvedValue(null);

      // Act
      const result = await userUCAdapter.updateUser("user999", {} as User);

      // Assert
      expect(result).toBeNull();
      expect(mockErrorFormatter.errorNotFound).toHaveBeenCalledWith("Usuario con id user999 no existe.");
    });

    it("debería lanzar error cuando el nuevo email ya existe", async () => {
      // Arrange
      const existingUser: User = {
        usuID: "user1",
        usuEmail: "old@test.com",
      } as User;
      const updatedUser: User = {
        usuID: "user1",
        usuEmail: "existing@test.com",
      } as User;
      mockUserGateway.getUserById.mockResolvedValue(existingUser);
      mockUserGateway.existByEmail.mockResolvedValue(true);

      // Act
      const result = await userUCAdapter.updateUser("user1", updatedUser);

      // Assert
      expect(result).toBeNull();
      expect(mockErrorFormatter.errorExistsEntity).toHaveBeenCalledWith(
        "Usuario con email existing@test.com ya existe."
      );
    });
  });

  describe("listProfessorUsers", () => {
    it("debería retornar la lista de profesores cuando el rol es professor", async () => {
      // Arrange
      const mockProfessors: User[] = [
        { usuID: "prof1", usuRole: "professor" } as User,
        { usuID: "prof2", usuRole: "professor" } as User,
      ];
      mockUserGateway.listProfessorUsers.mockResolvedValue(mockProfessors);

      // Act
      const result = await userUCAdapter.listProfessorUsers("professor");

      // Assert
      expect(result).toEqual(mockProfessors);
      expect(mockUserGateway.listProfessorUsers).toHaveBeenCalledWith("professor");
    });

    it("debería lanzar error cuando el rol no es professor", () => {
      // Act & Assert
      expect(() => userUCAdapter.listProfessorUsers("admin")).toThrow(
        "Usuario con rol admin no es un profesor."
      );
    });
  });
});
