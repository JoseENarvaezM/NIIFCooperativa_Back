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
const CaratulaUCAdapter_1 = require("../../../src/domain/useCases/CaratulaUCAdapter");
describe("CaratulaUCAdapter", () => {
    let caratulaUCAdapter;
    let mockCaratulaGateway;
    let mockErrorFormatter;
    beforeEach(() => {
        mockCaratulaGateway = {
            createForm: jest.fn(),
            getIDForm: jest.fn(),
            updateForm: jest.fn(),
            calculateReference: jest.fn(),
        };
        mockErrorFormatter = {
            genericError: jest.fn(),
            errorNotFound: jest.fn(),
        };
        caratulaUCAdapter = new CaratulaUCAdapter_1.CaratulaUCAdapter(mockCaratulaGateway, mockErrorFormatter);
    });
    describe("getIDForm", () => {
        it("debería retornar el formulario cuando existe", () => __awaiter(void 0, void 0, void 0, function* () {
            // Arrange
            const mockForm = { carID: "form1" };
            mockCaratulaGateway.getIDForm.mockResolvedValue(mockForm);
            // Act
            const result = yield caratulaUCAdapter.getIDForm("stu1", "room1");
            // Assert
            expect(result).toEqual(mockForm);
            expect(mockCaratulaGateway.getIDForm).toHaveBeenCalledWith("stu1", "room1");
        }));
        it("debería lanzar error cuando el formulario no existe", () => __awaiter(void 0, void 0, void 0, function* () {
            // Arrange
            mockCaratulaGateway.getIDForm.mockResolvedValue(null);
            // Act
            const result = yield caratulaUCAdapter.getIDForm("stu999", "room999");
            // Assert
            expect(result).toBeNull();
            expect(mockErrorFormatter.errorNotFound).toHaveBeenCalledWith("Formulario con stuID stu999 y roomID room999 no se encontró.");
        }));
    });
    describe("updateForm", () => {
        it("debería actualizar el formulario correctamente", () => __awaiter(void 0, void 0, void 0, function* () {
            // Arrange
            const mockForm = { carID: "form1" };
            mockCaratulaGateway.updateForm.mockResolvedValue(mockForm);
            // Act
            const result = yield caratulaUCAdapter.updateForm("stu1", "room1", mockForm);
            // Assert
            expect(result).toEqual(mockForm);
            expect(mockCaratulaGateway.updateForm).toHaveBeenCalledWith("stu1", "room1", mockForm);
        }));
    });
});
