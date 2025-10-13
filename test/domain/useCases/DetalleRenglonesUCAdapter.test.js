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
const DetalleRenglonesUCAdapter_1 = require("../../../src/domain/useCases/DetalleRenglonesUCAdapter");
describe("DetalleRenglonesUCAdapter", () => {
    let detalleRenglonesUCAdapter;
    let mockDetalleRenglonesGateway;
    let mockErrorFormatter;
    beforeEach(() => {
        mockDetalleRenglonesGateway = {
            createForm: jest.fn(),
            getIDForm: jest.fn(),
            updateForm: jest.fn(),
            calculateReference: jest.fn(),
        };
        mockErrorFormatter = {
            genericError: jest.fn(),
            errorNotFound: jest.fn(),
        };
        detalleRenglonesUCAdapter = new DetalleRenglonesUCAdapter_1.DetalleRenglonesUCAdapter(mockDetalleRenglonesGateway, mockErrorFormatter);
    });
    describe("getIDForm", () => {
        it("debería retornar el formulario cuando existe", () => __awaiter(void 0, void 0, void 0, function* () {
            // Arrange
            const mockForm = { detID: "form1" };
            mockDetalleRenglonesGateway.getIDForm.mockResolvedValue(mockForm);
            // Act
            const result = yield detalleRenglonesUCAdapter.getIDForm("stu1", "room1");
            // Assert
            expect(result).toEqual(mockForm);
            expect(mockDetalleRenglonesGateway.getIDForm).toHaveBeenCalledWith("stu1", "room1");
        }));
        it("debería lanzar error cuando el formulario no existe", () => __awaiter(void 0, void 0, void 0, function* () {
            // Arrange
            mockDetalleRenglonesGateway.getIDForm.mockResolvedValue(null);
            // Act
            const result = yield detalleRenglonesUCAdapter.getIDForm("stu999", "room999");
            // Assert
            expect(result).toBeNull();
            expect(mockErrorFormatter.errorNotFound).toHaveBeenCalledWith("Formulario con stuID stu999 y roomID room999 no se encontró.");
        }));
    });
    describe("updateForm", () => {
        it("debería actualizar el formulario correctamente", () => __awaiter(void 0, void 0, void 0, function* () {
            // Arrange
            const mockForm = { detID: "form1" };
            mockDetalleRenglonesGateway.updateForm.mockResolvedValue(mockForm);
            // Act
            const result = yield detalleRenglonesUCAdapter.updateForm("stu1", "room1", mockForm);
            // Assert
            expect(result).toEqual(mockForm);
            expect(mockDetalleRenglonesGateway.updateForm).toHaveBeenCalledWith("stu1", "room1", mockForm);
        }));
    });
});
