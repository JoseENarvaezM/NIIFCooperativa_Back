import { Request, Response, NextFunction } from "express";
import { ResumenEsfController } from "../../../../src/infrastructure/input/controllers/ResumenEsf.controller";
import { FormsUCIntPort } from "../../../../src/application/input/FormsUCIntPort";
import { FormResumenEsferi } from "../../../../src/domain/models/FormResumenEsferiModel";

interface MockRequest extends Partial<Request> {
    user?: any;
}

describe("ResumenEsfController", () => {
    let resumenEsfController: ResumenEsfController;
    let mockResumenEsfGateway: jest.Mocked<FormsUCIntPort<FormResumenEsferi>>;
    let mockRequest: MockRequest;
    let mockResponse: Partial<Response>;
    let mockNext: NextFunction;

    const mockResumenEsf: FormResumenEsferi = {
        resID: "res1",
        resContent: {
            EstadoDeSituacionFinancieraPatrimonio: {},
            EstadoDeResultadoIntegralImpuestosDeRenta: {},
        },
    };

    beforeEach(() => {
        mockResumenEsfGateway = {
            getIDForm: jest.fn(),
            updateForm: jest.fn(),
            createForm: jest.fn(),
            calculateReference: jest.fn(),
        } as jest.Mocked<FormsUCIntPort<FormResumenEsferi>>;

        mockRequest = {
            params: {},
            body: {},
        };

        mockResponse = {
            status: jest.fn().mockReturnThis(),
            json: jest.fn().mockReturnThis(),
        };

        mockNext = jest.fn();

        resumenEsfController = new ResumenEsfController(mockResumenEsfGateway);
    });

    describe("getIDResumenEsferi", () => {
        it("debe retornar el resumen esf del usuario autenticado", async () => {
            mockRequest.user = {
                stuID: "stu1",
                roomID: "room1",
            };

            mockResumenEsfGateway.getIDForm.mockResolvedValue(mockResumenEsf);

            await resumenEsfController.getIDResumenEsferi(
                mockRequest as Request,
                mockResponse as Response,
                mockNext
            );

            expect(mockResumenEsfGateway.getIDForm).toHaveBeenCalledWith("stu1", "room1");
            expect(mockResponse.status).toHaveBeenCalledWith(200);
            expect(mockResponse.json).toHaveBeenCalledWith(mockResumenEsf);
        });

        it("debe manejar cuando no existe el resumen esf", async () => {
            mockRequest.user = {
                stuID: "stu1",
                roomID: "room1",
            };

            mockResumenEsfGateway.getIDForm.mockResolvedValue(null);

            await resumenEsfController.getIDResumenEsferi(
                mockRequest as Request,
                mockResponse as Response,
                mockNext
            );

            expect(mockResponse.status).toHaveBeenCalledWith(200);
            expect(mockResponse.json).toHaveBeenCalledWith(null);
        });

        it("debe manejar errores y llamar a next", async () => {
            const error = new Error("Database error");
            mockRequest.user = {
                stuID: "stu1",
                roomID: "room1",
            };

            mockResumenEsfGateway.getIDForm.mockRejectedValue(error);

            await resumenEsfController.getIDResumenEsferi(
                mockRequest as Request,
                mockResponse as Response,
                mockNext
            );

            expect(mockNext).toHaveBeenCalledWith(error);
            expect(mockResponse.status).not.toHaveBeenCalled();
        });
    });

    describe("updateResumenEsferi", () => {
        it("debe actualizar el resumen esf exitosamente", async () => {
            const updatedData = {
                resContent: {
                    EstadoDeSituacionFinancieraPatrimonio: { Activos: {} },
                },
            };

            mockRequest.user = {
                stuID: "stu1",
                roomID: "room1",
            };
            mockRequest.body = updatedData;

            const updatedResumen = { ...mockResumenEsf, ...updatedData };
            mockResumenEsfGateway.updateForm.mockResolvedValue(updatedResumen);

            await resumenEsfController.updateResumenEsferi(
                mockRequest as Request,
                mockResponse as Response,
                mockNext
            );

            expect(mockResumenEsfGateway.updateForm).toHaveBeenCalledWith("stu1", "room1", updatedData);
            expect(mockResponse.status).toHaveBeenCalledWith(200);
            expect(mockResponse.json).toHaveBeenCalledWith(updatedResumen);
        });

        it("debe manejar errores durante la actualización", async () => {
            const error = new Error("Update error");
            mockRequest.user = {
                stuID: "stu1",
                roomID: "room1",
            };
            mockRequest.body = { resContent: {} };

            mockResumenEsfGateway.updateForm.mockRejectedValue(error);

            await resumenEsfController.updateResumenEsferi(
                mockRequest as Request,
                mockResponse as Response,
                mockNext
            );

            expect(mockNext).toHaveBeenCalledWith(error);
            expect(mockResponse.status).not.toHaveBeenCalled();
        });
    });

    describe("getResumenEsferiByStudentAndRoom", () => {
        it("debe retornar el resumen esf por stuID y roomID desde params", async () => {
            mockRequest.params = {
                stuID: "stu2",
                roomID: "room2",
            };

            mockResumenEsfGateway.getIDForm.mockResolvedValue(mockResumenEsf);

            await resumenEsfController.getResumenEsferiByStudentAndRoom(
                mockRequest as Request,
                mockResponse as Response,
                mockNext
            );

            expect(mockResumenEsfGateway.getIDForm).toHaveBeenCalledWith("stu2", "room2");
            expect(mockResponse.status).toHaveBeenCalledWith(200);
            expect(mockResponse.json).toHaveBeenCalledWith(mockResumenEsf);
        });

        it("debe retornar null cuando no existe el resumen", async () => {
            mockRequest.params = {
                stuID: "stu3",
                roomID: "room3",
            };

            mockResumenEsfGateway.getIDForm.mockResolvedValue(null);

            await resumenEsfController.getResumenEsferiByStudentAndRoom(
                mockRequest as Request,
                mockResponse as Response,
                mockNext
            );

            expect(mockResponse.status).toHaveBeenCalledWith(200);
            expect(mockResponse.json).toHaveBeenCalledWith(null);
        });

        it("debe manejar errores", async () => {
            const error = new Error("Get error");
            mockRequest.params = {
                stuID: "stu2",
                roomID: "room2",
            };

            mockResumenEsfGateway.getIDForm.mockRejectedValue(error);

            await resumenEsfController.getResumenEsferiByStudentAndRoom(
                mockRequest as Request,
                mockResponse as Response,
                mockNext
            );

            expect(mockNext).toHaveBeenCalledWith(error);
            expect(mockResponse.status).not.toHaveBeenCalled();
        });
    });
});
