import { Request, Response, NextFunction } from "express";
import { ValidatorMiddleware } from "../../../../src/infrastructure/input/middlewares/ValidatorMiddleware";
import { z } from "zod";

describe("ValidatorMiddleware", () => {
    let mockRequest: Partial<Request>;
    let mockResponse: Partial<Response>;
    let mockNext: NextFunction;

    beforeEach(() => {
        mockRequest = {
            body: {},
        };

        mockResponse = {
            status: jest.fn().mockReturnThis(),
            json: jest.fn().mockReturnThis(),
        };

        mockNext = jest.fn();
    });

    describe("validate", () => {
        it("debe validar exitosamente datos correctos", () => {
            const schema = z.object({
                email: z.string().email(),
                password: z.string().min(6),
            });

            const validatorMiddleware = new ValidatorMiddleware(schema);

            mockRequest.body = {
                email: "test@example.com",
                password: "password123",
            };

            validatorMiddleware.validate(
                mockRequest as Request,
                mockResponse as Response,
                mockNext
            );

            expect(mockNext).toHaveBeenCalled();
            expect(mockResponse.status).not.toHaveBeenCalled();
            expect(mockRequest.body).toEqual({
                email: "test@example.com",
                password: "password123",
            });
        });

        it("debe rechazar datos con email inválido", () => {
            const schema = z.object({
                email: z.string().email(),
                password: z.string().min(6),
            });

            const validatorMiddleware = new ValidatorMiddleware(schema);

            mockRequest.body = {
                email: "invalid-email",
                password: "password123",
            };

            validatorMiddleware.validate(
                mockRequest as Request,
                mockResponse as Response,
                mockNext
            );

            expect(mockNext).not.toHaveBeenCalled();
            expect(mockResponse.status).toHaveBeenCalledWith(400);
            expect(mockResponse.json).toHaveBeenCalledWith({
                error: "Validation failed",
                details: expect.arrayContaining([
                    expect.objectContaining({
                        path: "email",
                        message: expect.any(String),
                    }),
                ]),
            });
        });

        it("debe rechazar datos con password corta", () => {
            const schema = z.object({
                email: z.string().email(),
                password: z.string().min(6),
            });

            const validatorMiddleware = new ValidatorMiddleware(schema);

            mockRequest.body = {
                email: "test@example.com",
                password: "12345",
            };

            validatorMiddleware.validate(
                mockRequest as Request,
                mockResponse as Response,
                mockNext
            );

            expect(mockNext).not.toHaveBeenCalled();
            expect(mockResponse.status).toHaveBeenCalledWith(400);
            expect(mockResponse.json).toHaveBeenCalledWith({
                error: "Validation failed",
                details: expect.arrayContaining([
                    expect.objectContaining({
                        path: "password",
                        message: expect.any(String),
                    }),
                ]),
            });
        });

        it("debe rechazar cuando faltan campos requeridos", () => {
            const schema = z.object({
                email: z.string().email(),
                password: z.string().min(6),
                name: z.string(),
            });

            const validatorMiddleware = new ValidatorMiddleware(schema);

            mockRequest.body = {
                email: "test@example.com",
            };

            validatorMiddleware.validate(
                mockRequest as Request,
                mockResponse as Response,
                mockNext
            );

            expect(mockNext).not.toHaveBeenCalled();
            expect(mockResponse.status).toHaveBeenCalledWith(400);
            expect(mockResponse.json).toHaveBeenCalledWith({
                error: "Validation failed",
                details: expect.arrayContaining([
                    expect.objectContaining({
                        path: "password",
                    }),
                    expect.objectContaining({
                        path: "name",
                    }),
                ]),
            });
        });

        it("debe manejar múltiples errores de validación", () => {
            const schema = z.object({
                email: z.string().email(),
                password: z.string().min(6),
                age: z.number().min(18),
            });

            const validatorMiddleware = new ValidatorMiddleware(schema);

            mockRequest.body = {
                email: "invalid-email",
                password: "123",
                age: 15,
            };

            validatorMiddleware.validate(
                mockRequest as Request,
                mockResponse as Response,
                mockNext
            );

            expect(mockNext).not.toHaveBeenCalled();
            expect(mockResponse.status).toHaveBeenCalledWith(400);
            expect(mockResponse.json).toHaveBeenCalledWith({
                error: "Validation failed",
                details: expect.arrayContaining([
                    expect.objectContaining({
                        path: "email",
                    }),
                    expect.objectContaining({
                        path: "password",
                    }),
                    expect.objectContaining({
                        path: "age",
                    }),
                ]),
            });
        });

        it("debe validar objetos anidados correctamente", () => {
            const schema = z.object({
                user: z.object({
                    email: z.string().email(),
                    profile: z.object({
                        name: z.string(),
                        age: z.number(),
                    }),
                }),
            });

            const validatorMiddleware = new ValidatorMiddleware(schema);

            mockRequest.body = {
                user: {
                    email: "test@example.com",
                    profile: {
                        name: "John Doe",
                        age: 25,
                    },
                },
            };

            validatorMiddleware.validate(
                mockRequest as Request,
                mockResponse as Response,
                mockNext
            );

            expect(mockNext).toHaveBeenCalled();
            expect(mockResponse.status).not.toHaveBeenCalled();
        });

        it("debe rechazar objetos anidados con errores", () => {
            const schema = z.object({
                user: z.object({
                    email: z.string().email(),
                    profile: z.object({
                        name: z.string(),
                        age: z.number(),
                    }),
                }),
            });

            const validatorMiddleware = new ValidatorMiddleware(schema);

            mockRequest.body = {
                user: {
                    email: "invalid-email",
                    profile: {
                        name: "John Doe",
                        age: "not-a-number",
                    },
                },
            };

            validatorMiddleware.validate(
                mockRequest as Request,
                mockResponse as Response,
                mockNext
            );

            expect(mockNext).not.toHaveBeenCalled();
            expect(mockResponse.status).toHaveBeenCalledWith(400);
            expect(mockResponse.json).toHaveBeenCalledWith({
                error: "Validation failed",
                details: expect.arrayContaining([
                    expect.objectContaining({
                        path: "user.email",
                    }),
                    expect.objectContaining({
                        path: "user.profile.age",
                    }),
                ]),
            });
        });

        it("debe transformar datos cuando el schema tiene transformaciones", () => {
            const schema = z.object({
                email: z.string().email().toLowerCase(),
                age: z.string().transform((val) => parseInt(val, 10)),
            });

            const validatorMiddleware = new ValidatorMiddleware(schema);

            mockRequest.body = {
                email: "TEST@EXAMPLE.COM",
                age: "25",
            };

            validatorMiddleware.validate(
                mockRequest as Request,
                mockResponse as Response,
                mockNext
            );

            expect(mockNext).toHaveBeenCalled();
            expect(mockRequest.body).toEqual({
                email: "test@example.com",
                age: 25,
            });
        });
    });
});
