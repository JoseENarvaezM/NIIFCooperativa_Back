import { Request, Response, NextFunction } from "express";
import { AuthController } from "../../../../src/infrastructure/input/controllers/Auth.controller";
import { AuthUCIntPort } from "../../../../src/application/input/AuthUCIntPort";

interface MockRequest extends Partial<Request> {
    user?: any;
}

describe("AuthController", () => {
    let authController: AuthController;
    let mockAuthUseCases: jest.Mocked<AuthUCIntPort>;
    let mockRequest: MockRequest;
    let mockResponse: Partial<Response>;
    let mockNext: NextFunction;

    beforeEach(() => {
        mockAuthUseCases = {
            login: jest.fn(),
            verifyToken: jest.fn(),
        } as jest.Mocked<AuthUCIntPort>;

        mockRequest = {
            body: {},
        };

        mockResponse = {
            status: jest.fn().mockReturnThis(),
            json: jest.fn().mockReturnThis(),
            cookie: jest.fn().mockReturnThis(),
            clearCookie: jest.fn().mockReturnThis(),
            send: jest.fn().mockReturnThis(),
        };

        mockNext = jest.fn();

        authController = new AuthController(mockAuthUseCases);
    });

    describe("login", () => {
        it("debe iniciar sesión exitosamente con credenciales válidas", async () => {
            const mockUser = {
                usuID: "user1",
                usuRole: "professor" as const,
                token: "valid-token-123",
            };

            mockRequest.body = {
                email: "test@example.com",
                password: "password123",
            };

            mockAuthUseCases.login.mockResolvedValue(mockUser);

            await authController.login(
                mockRequest as Request,
                mockResponse as Response,
                mockNext
            );

            expect(mockAuthUseCases.login).toHaveBeenCalledWith("test@example.com", "password123");
            expect(mockResponse.cookie).toHaveBeenCalledWith(
                "token",
                "valid-token-123",
                { httpOnly: true, secure: false, path: "/", sameSite: "strict" }
            );
            expect(mockResponse.status).toHaveBeenCalledWith(200);
            expect(mockResponse.json).toHaveBeenCalledWith({
                usuID: "user1",
                usuRole: "professor",
            });
        });

        it("debe retornar 401 cuando las credenciales son inválidas", async () => {
            mockRequest.body = {
                email: "wrong@example.com",
                password: "wrongpassword",
            };

            mockAuthUseCases.login.mockResolvedValue(null);

            await authController.login(
                mockRequest as Request,
                mockResponse as Response,
                mockNext
            );

            expect(mockAuthUseCases.login).toHaveBeenCalledWith("wrong@example.com", "wrongpassword");
            expect(mockResponse.status).toHaveBeenCalledWith(401);
            expect(mockResponse.json).toHaveBeenCalledWith({ message: "Invalid credentials" });
            expect(mockResponse.cookie).not.toHaveBeenCalled();
        });

        it("debe manejar errores y llamar a next", async () => {
            const error = new Error("Database error");
            mockRequest.body = {
                email: "test@example.com",
                password: "password123",
            };

            mockAuthUseCases.login.mockRejectedValue(error);

            await authController.login(
                mockRequest as Request,
                mockResponse as Response,
                mockNext
            );

            expect(mockNext).toHaveBeenCalledWith(error);
            expect(mockResponse.status).not.toHaveBeenCalled();
        });

        it("debe manejar login de usuario admin", async () => {
            const mockAdminUser = {
                usuID: "admin1",
                usuRole: "admin",
                token: "admin-token-456",
            };

            mockRequest.body = {
                email: "admin@example.com",
                password: "adminpass",
            };

            mockAuthUseCases.login.mockResolvedValue(mockAdminUser as any);

            await authController.login(
                mockRequest as Request,
                mockResponse as Response,
                mockNext
            );

            expect(mockResponse.json).toHaveBeenCalledWith({
                usuID: "admin1",
                usuRole: "admin",
            });
        });
    });

    describe("logout", () => {
        it("debe cerrar sesión exitosamente", async () => {
            await authController.logout(
                mockRequest as Request,
                mockResponse as Response,
                mockNext
            );

            expect(mockResponse.clearCookie).toHaveBeenCalledWith(
                "token",
                { httpOnly: true, secure: false, path: "/", sameSite: "strict" }
            );
            expect(mockResponse.status).toHaveBeenCalledWith(204);
            expect(mockResponse.send).toHaveBeenCalled();
        });

        it("debe manejar errores durante logout", async () => {
            const error = new Error("Logout error");
            mockResponse.clearCookie = jest.fn().mockImplementation(() => {
                throw error;
            });

            await authController.logout(
                mockRequest as Request,
                mockResponse as Response,
                mockNext
            );

            expect(mockNext).toHaveBeenCalledWith(error);
        });
    });

    describe("profile", () => {
        it("debe retornar el perfil del usuario autenticado", async () => {
            mockRequest.user = {
                usuID: "user1",
                usuRole: "professor",
            };

            await authController.profile(
                mockRequest as Request,
                mockResponse as Response,
                mockNext
            );

            expect(mockResponse.status).toHaveBeenCalledWith(200);
            expect(mockResponse.json).toHaveBeenCalledWith({
                usuID: "user1",
                usuRole: "professor",
            });
        });

        it("debe manejar errores al obtener el perfil", async () => {
            const error = new Error("Profile error");
            mockResponse.status = jest.fn().mockImplementation(() => {
                throw error;
            });

            mockRequest.user = {
                usuID: "user1",
                usuRole: "professor",
            };

            await authController.profile(
                mockRequest as Request,
                mockResponse as Response,
                mockNext
            );

            expect(mockNext).toHaveBeenCalledWith(error);
        });
    });

    describe("studentProfile", () => {
        it("debe retornar el perfil del estudiante autenticado", async () => {
            mockRequest.user = {
                stuID: "stu1",
                roomID: "room1",
                usuRole: "student",
            };

            await authController.studentProfile(
                mockRequest as Request,
                mockResponse as Response,
                mockNext
            );

            expect(mockResponse.status).toHaveBeenCalledWith(200);
            expect(mockResponse.json).toHaveBeenCalledWith({
                stuID: "stu1",
                roomID: "room1",
                usuRole: "student",
            });
        });

        it("debe manejar errores al obtener el perfil del estudiante", async () => {
            const error = new Error("Student profile error");
            mockResponse.status = jest.fn().mockImplementation(() => {
                throw error;
            });

            mockRequest.user = {
                stuID: "stu1",
                roomID: "room1",
                usuRole: "student",
            };

            await authController.studentProfile(
                mockRequest as Request,
                mockResponse as Response,
                mockNext
            );

            expect(mockNext).toHaveBeenCalledWith(error);
        });
    });
});
