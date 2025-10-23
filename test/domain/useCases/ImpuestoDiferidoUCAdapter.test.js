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
const ImpuestoDiferidoUCAdapter_1 = require("../../../src/domain/useCases/ImpuestoDiferidoUCAdapter");
describe("ImpuestoDiferidoUCAdapter", () => {
    let impuestoDiferidoUCAdapter;
    let mockImpuestoDiferidoGateway;
    let mockErrorFormatter;
    beforeEach(() => {
        mockImpuestoDiferidoGateway = {
            createForm: jest.fn(),
            getIDForm: jest.fn(),
            updateForm: jest.fn(),
            calculateReference: jest.fn(),
        };
        mockErrorFormatter = {
            genericError: jest.fn(),
            errorNotFound: jest.fn(),
        };
        impuestoDiferidoUCAdapter = new ImpuestoDiferidoUCAdapter_1.ImpuestoDiferidoUCAdapter(mockImpuestoDiferidoGateway, mockErrorFormatter);
    });
    describe("getIDForm", () => {
        it("debería retornar el formulario calculado cuando existe", () => __awaiter(void 0, void 0, void 0, function* () {
            // Arrange
            const mockForm = { impID: "form1" };
            const mockCalculatedForm = { impID: "form1", calculated: true };
            mockImpuestoDiferidoGateway.getIDForm.mockResolvedValue(mockForm);
            mockImpuestoDiferidoGateway.calculateReference.mockResolvedValue(mockCalculatedForm);
            // Act
            const result = yield impuestoDiferidoUCAdapter.getIDForm("stu1", "room1");
            // Assert
            expect(result).toEqual(mockCalculatedForm);
            expect(mockImpuestoDiferidoGateway.calculateReference).toHaveBeenCalledWith("stu1", "room1");
        }));
        it("debería lanzar error cuando el formulario no existe", () => __awaiter(void 0, void 0, void 0, function* () {
            // Arrange
            mockImpuestoDiferidoGateway.getIDForm.mockResolvedValue(null);
            mockImpuestoDiferidoGateway.calculateReference.mockResolvedValue(null);
            // Act
            const result = yield impuestoDiferidoUCAdapter.getIDForm("stu999", "room999");
            // Assert
            expect(result).toBeNull();
            expect(mockErrorFormatter.errorNotFound).toHaveBeenCalledWith("Formulario con stuID stu999 y roomID room999 no se encontró.");
        }));
    });
    describe("updateForm", () => {
        it("debería actualizar el formulario correctamente", () => __awaiter(void 0, void 0, void 0, function* () {
            // Arrange
            const mockForm = { impID: "form1" };
            mockImpuestoDiferidoGateway.updateForm.mockResolvedValue(mockForm);
            // Act
            const result = yield impuestoDiferidoUCAdapter.updateForm("stu1", "room1", mockForm);
            // Assert
            expect(result).toEqual(mockForm);
            expect(mockImpuestoDiferidoGateway.updateForm).toHaveBeenCalledWith("stu1", "room1", mockForm);
        }));
    });
});
