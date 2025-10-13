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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Form110GatewayAdapter_1 = require("../../../src/infrastructure/output/persistence/gateway/Form110GatewayAdapter");
const database_1 = __importDefault(require("../../../src/config/database"));
jest.mock("../../../src/config/database", () => ({
    __esModule: true,
    default: {
        report: {
            findFirst: jest.fn(),
        },
        formr110: {
            findUnique: jest.fn(),
            create: jest.fn(),
            update: jest.fn(),
        },
        formdetallerenglones: {
            findUnique: jest.fn(),
        },
        formcaratula: {
            findUnique: jest.fn(),
        },
    },
}));
describe("Form110GatewayAdapter", () => {
    let adapter;
    beforeEach(() => {
        adapter = new Form110GatewayAdapter_1.Form110GatewayAdapter();
        jest.clearAllMocks();
    });
    describe("getIDForm", () => {
        it("debería retornar el formulario 110 cuando existe", () => __awaiter(void 0, void 0, void 0, function* () {
            // Arrange
            const mockReport = { reportID: "rep1", r110ID: "r110-1", stuID: "stu1", roomID: "room1" };
            const mockForm110 = { r110ID: "r110-1", r110Content: { DeclaracionDeRentaYComplementarioParaPersonasJuridicasYAsimiladas: {} } };
            database_1.default.report.findFirst.mockResolvedValue(mockReport);
            database_1.default.formr110.findUnique.mockResolvedValue(mockForm110);
            // Act
            const result = yield adapter.getIDForm("stu1", "room1");
            // Assert
            expect(result).toEqual(mockForm110);
            expect(database_1.default.report.findFirst).toHaveBeenCalledWith({
                where: { stuID: "stu1", roomID: "room1" },
            });
            expect(database_1.default.formr110.findUnique).toHaveBeenCalledWith({
                where: { r110ID: "r110-1" },
            });
        }));
        it("debería retornar null cuando no existe el formulario 110", () => __awaiter(void 0, void 0, void 0, function* () {
            // Arrange
            const mockReport = { reportID: "rep1", r110ID: "r110-1", stuID: "stu1", roomID: "room1" };
            database_1.default.report.findFirst.mockResolvedValue(mockReport);
            database_1.default.formr110.findUnique.mockResolvedValue(null);
            // Act
            const result = yield adapter.getIDForm("stu1", "room1");
            // Assert
            expect(result).toBeNull();
        }));
    });
    describe("createForm", () => {
        it("debería crear un formulario 110 exitosamente", () => __awaiter(void 0, void 0, void 0, function* () {
            // Arrange
            const mockFormData = {
                r110Content: {
                    DeclaracionDeRentaYComplementarioParaPersonasJuridicasYAsimiladas: {
                        Año: 2024,
                        DatosDelDeclarante: { NIT: "900123456", DV: 7 },
                    },
                },
            };
            const mockCreatedForm = Object.assign({ r110ID: "r110-1" }, mockFormData);
            database_1.default.formr110.create.mockResolvedValue(mockCreatedForm);
            // Act
            const result = yield adapter.createForm(mockFormData);
            // Assert
            expect(result).toEqual(mockCreatedForm);
            expect(database_1.default.formr110.create).toHaveBeenCalledWith({
                data: {
                    r110Content: mockFormData.r110Content,
                },
            });
        }));
        it("debería crear un formulario con contenido vacío", () => __awaiter(void 0, void 0, void 0, function* () {
            // Arrange
            const mockFormData = { r110Content: {} };
            const mockCreatedForm = { r110ID: "r110-1", r110Content: {} };
            database_1.default.formr110.create.mockResolvedValue(mockCreatedForm);
            // Act
            const result = yield adapter.createForm(mockFormData);
            // Assert
            expect(result).toEqual(mockCreatedForm);
        }));
        it("debería crear formulario con todos los datos informativos", () => __awaiter(void 0, void 0, void 0, function* () {
            // Arrange
            const mockFormData = {
                r110Content: {
                    DatosResumen: {
                        DatosInformativos: {
                            TotalCostosGastosDeNomina: 50000000,
                            AportesAlSistemaDeSeguridadSocial: 10000000,
                            AportacionesSENAICBFCajasCompensacion: 2000000,
                        },
                    },
                },
            };
            const mockCreatedForm = Object.assign({ r110ID: "r110-1" }, mockFormData);
            database_1.default.formr110.create.mockResolvedValue(mockCreatedForm);
            // Act
            const result = yield adapter.createForm(mockFormData);
            // Assert
            expect(result).toEqual(mockCreatedForm);
        }));
    });
    describe("updateForm", () => {
        it("debería actualizar el formulario 110 exitosamente", () => __awaiter(void 0, void 0, void 0, function* () {
            // Arrange
            const mockReport = { reportID: "rep1", r110ID: "r110-1", stuID: "stu1", roomID: "room1" };
            const mockFormData = {
                r110Content: {
                    DatosResumen: { Patromonio: { TotalPatrimonioBruto: 100000000 } },
                },
            };
            const mockUpdatedForm = Object.assign({ r110ID: "r110-1" }, mockFormData);
            database_1.default.report.findFirst.mockResolvedValue(mockReport);
            database_1.default.formr110.update.mockResolvedValue(mockUpdatedForm);
            // Act
            const result = yield adapter.updateForm("stu1", "room1", mockFormData);
            // Assert
            expect(result).toEqual(mockUpdatedForm);
            expect(database_1.default.formr110.update).toHaveBeenCalledWith({
                where: { r110ID: "r110-1" },
                data: {
                    r110Content: mockFormData,
                },
            });
        }));
        it("debería manejar actualización cuando el reporte no existe", () => __awaiter(void 0, void 0, void 0, function* () {
            // Arrange
            database_1.default.report.findFirst.mockResolvedValue(null);
            database_1.default.formr110.update.mockResolvedValue(null);
            // Act
            const result = yield adapter.updateForm("stu999", "room999", { r110Content: {} });
            // Assert
            expect(database_1.default.formr110.update).toHaveBeenCalledWith({
                where: { r110ID: undefined },
                data: { r110Content: { r110Content: {} } },
            });
        }));
        it("debería actualizar formulario con cambios parciales en liquidación", () => __awaiter(void 0, void 0, void 0, function* () {
            // Arrange
            const mockReport = { reportID: "rep1", r110ID: "r110-1", stuID: "stu1", roomID: "room1" };
            const mockFormData = {
                r110Content: {
                    DatosResumen: {
                        LiquidacionPrivada: {
                            TotalImpuestoACargo: 15000000,
                            Sanciones: 500000,
                        },
                    },
                },
            };
            const mockUpdatedForm = Object.assign({ r110ID: "r110-1" }, mockFormData);
            database_1.default.report.findFirst.mockResolvedValue(mockReport);
            database_1.default.formr110.update.mockResolvedValue(mockUpdatedForm);
            // Act
            const result = yield adapter.updateForm("stu1", "room1", mockFormData);
            // Assert
            expect(result).toEqual(mockUpdatedForm);
        }));
    });
    describe("calculateReference", () => {
        it("debería retornar el formulario sin cambios cuando no hay contenido", () => __awaiter(void 0, void 0, void 0, function* () {
            // Arrange
            const mockReport = { reportID: "rep1", r110ID: "r110-1", stuID: "stu1", roomID: "room1" };
            const mockForm110 = { r110ID: "r110-1", r110Content: null };
            database_1.default.report.findFirst.mockResolvedValue(mockReport);
            database_1.default.formr110.findUnique.mockResolvedValue(mockForm110);
            // Act
            const result = yield adapter.calculateReference("stu1", "room1");
            // Assert
            expect(result).toEqual(mockForm110);
        }));
        it("debería retornar null cuando no existe el formulario", () => __awaiter(void 0, void 0, void 0, function* () {
            // Arrange
            const mockReport = { reportID: "rep1", r110ID: "r110-1", stuID: "stu1", roomID: "room1" };
            database_1.default.report.findFirst.mockResolvedValue(mockReport);
            database_1.default.formr110.findUnique.mockResolvedValue(null);
            // Act
            const result = yield adapter.calculateReference("stu1", "room1");
            // Assert
            expect(result).toBeNull();
        }));
    });
});
