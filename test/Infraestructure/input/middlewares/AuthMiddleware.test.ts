import { Request, Response, NextFunction } from "express";
import { AuthMiddleware } from "../../../../src/infrastructure/input/middlewares/AuthMiddleware";
import { AuthUCIntPort } from "../../../../src/application/input/AuthUCIntPort";

interface MockRequest extends Partial<Request> {
    user?: any;
    cookies?: any;
}

describe("AuthMiddleware", () => {
    let authMiddleware: AuthMiddleware;
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
            cookies: {},
        };

        mockResponse = {
            status: jest.fn().mockReturnThis(),
            json: jest.fn().mockReturnThis(),
        };

        mockNext = jest.fn();

        authMiddleware = new AuthMiddleware(mockAuthUseCases);
    });

    describe("authenticate", () => {
        it("debe autenticar exitosamente con token válido y sin restricción de roles", async () => {
            const mockUser = {
                usuID: "user1",
                usuRole: "professor",
            };

            mockRequest.cookies = { token: "valid-token" };
            mockAuthUseCases.verifyToken.mockResolvedValue(mockUser);

            const middleware = authMiddleware.authenticate();
            await middleware(mockRequest as Request, mockResponse as Response, mockNext);

            expect(mockAuthUseCases.verifyToken).toHaveBeenCalledWith("valid-token");
            expect(mockRequest.user).toEqual(mockUser);
            expect(mockNext).toHaveBeenCalled();
            expect(mockResponse.status).not.toHaveBeenCalled();
        });

        it("debe autenticar exitosamente con rol permitido", async () => {
            const mockUser = {
                usuID: "user1",
                usuRole: "admin",
            };

            mockRequest.cookies = { token: "valid-token" };
            mockAuthUseCases.verifyToken.mockResolvedValue(mockUser);

            const middleware = authMiddleware.authenticate("admin", "professor");
            await middleware(mockRequest as Request, mockResponse as Response, mockNext);

            expect(mockAuthUseCases.verifyToken).toHaveBeenCalledWith("valid-token");
            expect(mockRequest.user).toEqual(mockUser);
            expect(mockNext).toHaveBeenCalled();
            expect(mockResponse.status).not.toHaveBeenCalled();
        });

        it("debe rechazar cuando no hay token", async () => {
            mockRequest.cookies = {};

            const middleware = authMiddleware.authenticate();
            await middleware(mockRequest as Request, mockResponse as Response, mockNext);

            expect(mockResponse.status).toHaveBeenCalledWith(401);
            expect(mockResponse.json).toHaveBeenCalledWith({ message: "No token provided" });
            expect(mockNext).not.toHaveBeenCalled();
        });

        it("debe rechazar cuando el token es inválido", async () => {
            mockRequest.cookies = { token: "invalid-token" };
            mockAuthUseCases.verifyToken.mockResolvedValue(null);

            const middleware = authMiddleware.authenticate();
            await middleware(mockRequest as Request, mockResponse as Response, mockNext);

            expect(mockAuthUseCases.verifyToken).toHaveBeenCalledWith("invalid-token");
            expect(mockResponse.status).toHaveBeenCalledWith(401);
            expect(mockResponse.json).toHaveBeenCalledWith({ message: "Invalid token" });
            expect(mockNext).not.toHaveBeenCalled();
        });

        it("debe rechazar cuando el rol del usuario no está permitido", async () => {
            const mockUser = {
                usuID: "user1",
                usuRole: "professor",
            };

            mockRequest.cookies = { token: "valid-token" };
            mockAuthUseCases.verifyToken.mockResolvedValue(mockUser);

            const middleware = authMiddleware.authenticate("admin");
            await middleware(mockRequest as Request, mockResponse as Response, mockNext);

            expect(mockAuthUseCases.verifyToken).toHaveBeenCalledWith("valid-token");
            expect(mockResponse.status).toHaveBeenCalledWith(403);
            expect(mockResponse.json).toHaveBeenCalledWith({ message: "Forbidden - insufficient role" });
            expect(mockNext).not.toHaveBeenCalled();
        });

        it("debe permitir acceso cuando el usuario tiene uno de los roles permitidos", async () => {
            const mockUser = {
                usuID: "user1",
                usuRole: "professor",
            };

            mockRequest.cookies = { token: "valid-token" };
            mockAuthUseCases.verifyToken.mockResolvedValue(mockUser);

            const middleware = authMiddleware.authenticate("admin", "professor");
            await middleware(mockRequest as Request, mockResponse as Response, mockNext);

            expect(mockNext).toHaveBeenCalled();
            expect(mockResponse.status).not.toHaveBeenCalled();
        });

        it("debe manejar errores durante la verificación del token", async () => {
            const consoleErrorSpy = jest.spyOn(console, 'error').mockImplementation();
            const error = new Error("Token verification error");
            
            mockRequest.cookies = { token: "valid-token" };
            mockAuthUseCases.verifyToken.mockRejectedValue(error);

            const middleware = authMiddleware.authenticate();
            await middleware(mockRequest as Request, mockResponse as Response, mockNext);

            expect(consoleErrorSpy).toHaveBeenCalledWith("Authentication error:", error);
            expect(mockResponse.status).toHaveBeenCalledWith(500);
            expect(mockResponse.json).toHaveBeenCalledWith({ message: "Internal server error" });
            expect(mockNext).not.toHaveBeenCalled();

            consoleErrorSpy.mockRestore();
        });

        it("debe manejar múltiples roles permitidos correctamente", async () => {
            const mockUser = {
                usuID: "user1",
                usuRole: "admin",
            };

            mockRequest.cookies = { token: "valid-token" };
            mockAuthUseCases.verifyToken.mockResolvedValue(mockUser);

            const middleware = authMiddleware.authenticate("admin", "professor", "student");
            await middleware(mockRequest as Request, mockResponse as Response, mockNext);

            expect(mockNext).toHaveBeenCalled();
            expect(mockResponse.status).not.toHaveBeenCalled();
        });
    });
});
