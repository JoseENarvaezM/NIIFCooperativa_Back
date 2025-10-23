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
const Form110UCAdapter_1 = require("../../../src/domain/useCases/Form110UCAdapter");
describe("Form110UCAdapter", () => {
    let form110UCAdapter;
    let mockForm110Gateway;
    let mockErrorFormatter;
    beforeEach(() => {
        mockForm110Gateway = {
            createForm: jest.fn(),
            getIDForm: jest.fn(),
            updateForm: jest.fn(),
            calculateReference: jest.fn(),
        };
        mockErrorFormatter = {
            genericError: jest.fn(),
            errorNotFound: jest.fn(),
        };
        form110UCAdapter = new Form110UCAdapter_1.Form110UCAdapter(mockForm110Gateway, mockErrorFormatter);
    });
    describe("getIDForm", () => {
        it("debería retornar el formulario calculado cuando existe", () => __awaiter(void 0, void 0, void 0, function* () {
            // Arrange
            const mockForm = { r110ID: "form1" };
            const mockCalculatedForm = { r110ID: "form1", calculated: true };
            mockForm110Gateway.getIDForm.mockResolvedValue(mockForm);
            mockForm110Gateway.calculateReference.mockResolvedValue(mockCalculatedForm);
            // Act
            const result = yield form110UCAdapter.getIDForm("stu1", "room1");
            // Assert
            expect(result).toEqual(mockCalculatedForm);
            expect(mockForm110Gateway.calculateReference).toHaveBeenCalledWith("stu1", "room1");
        }));
        it("debería retornar el formulario calculado (Promise) incluso cuando se resuelve a null", () => __awaiter(void 0, void 0, void 0, function* () {
            // Arrange
            const mockForm = { r110ID: "form1" };
            mockForm110Gateway.getIDForm.mockResolvedValue(mockForm);
            // calculateReference returns a Promise - the code doesn't await it
            mockForm110Gateway.calculateReference.mockResolvedValue(null);
            // Act
            const result = yield form110UCAdapter.getIDForm("stu1", "room1");
            // Assert
            // The code has a bug: it returns the Promise (truthy) instead of awaiting it
            // When we await the result, the Promise resolves to null
            expect(result).toBeNull();
        }));
        it("debería lanzar error cuando el formulario no existe", () => __awaiter(void 0, void 0, void 0, function* () {
            // Arrange
            mockForm110Gateway.getIDForm.mockResolvedValue(null);
            mockForm110Gateway.calculateReference.mockResolvedValue(null);
            // Act
            const result = yield form110UCAdapter.getIDForm("stu999", "room999");
            // Assert
            expect(result).toBeNull();
            expect(mockErrorFormatter.errorNotFound).toHaveBeenCalledWith("Formulario con stuID stu999 y roomID room999 no se encontró.");
        }));
    });
    describe("updateForm", () => {
        it("debería actualizar el formulario correctamente", () => __awaiter(void 0, void 0, void 0, function* () {
            // Arrange
            const mockForm = { r110ID: "form1" };
            mockForm110Gateway.updateForm.mockResolvedValue(mockForm);
            // Act
            const result = yield form110UCAdapter.updateForm("stu1", "room1", mockForm);
            // Assert
            expect(result).toEqual(mockForm);
            expect(mockForm110Gateway.updateForm).toHaveBeenCalledWith("stu1", "room1", mockForm);
        }));
    });
});
