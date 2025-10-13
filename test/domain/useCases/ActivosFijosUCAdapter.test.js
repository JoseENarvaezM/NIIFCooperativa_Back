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
const ActivosFijosUCAdapter_1 = require("../../../src/domain/useCases/ActivosFijosUCAdapter");
describe("ActivosFijosUCAdapter", () => {
    let activosFijosUCAdapter;
    let mockActivosFijosGateway;
    let mockErrorFormatter;
    beforeEach(() => {
        mockActivosFijosGateway = {
            createForm: jest.fn(),
            getIDForm: jest.fn(),
            updateForm: jest.fn(),
            calculateReference: jest.fn(),
        };
        mockErrorFormatter = {
            genericError: jest.fn(),
            errorNotFound: jest.fn(),
        };
        activosFijosUCAdapter = new ActivosFijosUCAdapter_1.ActivosFijosUCAdapter(mockActivosFijosGateway, mockErrorFormatter);
    });
    describe("getIDForm", () => {
        it("debería retornar el formulario calculado cuando existe", () => __awaiter(void 0, void 0, void 0, function* () {
            // Arrange
            const mockForm = { actID: "form1" };
            const mockCalculatedForm = { actID: "form1", calculated: true };
            mockActivosFijosGateway.getIDForm.mockResolvedValue(mockForm);
            mockActivosFijosGateway.calculateReference.mockResolvedValue(mockCalculatedForm);
            // Act
            const result = yield activosFijosUCAdapter.getIDForm("stu1", "room1");
            // Assert
            expect(result).toEqual(mockCalculatedForm);
            expect(mockActivosFijosGateway.calculateReference).toHaveBeenCalledWith("stu1", "room1");
        }));
        it("debería lanzar error cuando el formulario no existe", () => __awaiter(void 0, void 0, void 0, function* () {
            // Arrange
            mockActivosFijosGateway.getIDForm.mockResolvedValue(null);
            mockActivosFijosGateway.calculateReference.mockResolvedValue(null);
            // Act
            const result = yield activosFijosUCAdapter.getIDForm("stu999", "room999");
            // Assert
            expect(result).toBeNull();
            expect(mockErrorFormatter.errorNotFound).toHaveBeenCalledWith("Formulario con stuID stu999 y roomID room999 no se encontró.");
        }));
    });
    describe("updateForm", () => {
        it("debería actualizar el formulario correctamente", () => __awaiter(void 0, void 0, void 0, function* () {
            // Arrange
            const mockForm = { actID: "form1" };
            mockActivosFijosGateway.updateForm.mockResolvedValue(mockForm);
            // Act
            const result = yield activosFijosUCAdapter.updateForm("stu1", "room1", mockForm);
            // Assert
            expect(result).toEqual(mockForm);
            expect(mockActivosFijosGateway.updateForm).toHaveBeenCalledWith("stu1", "room1", mockForm);
        }));
    });
});
