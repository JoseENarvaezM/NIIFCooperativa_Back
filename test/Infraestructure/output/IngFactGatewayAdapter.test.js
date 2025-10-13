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
const IngFactGatewayAdapter_1 = require("../../../src/infrastructure/output/persistence/gateway/IngFactGatewayAdapter");
const database_1 = __importDefault(require("../../../src/config/database"));
jest.mock("../../../src/config/database", () => ({
    __esModule: true,
    default: {
        report: {
            findFirst: jest.fn(),
        },
        formingresosfancturacion: {
            findUnique: jest.fn(),
            create: jest.fn(),
            update: jest.fn(),
        },
        formdetallerenglones: {
            findUnique: jest.fn(),
        },
    },
}));
describe("IngFactGatewayAdapter", () => {
    let adapter;
    beforeEach(() => {
        adapter = new IngFactGatewayAdapter_1.IngFactGatewayAdapter();
        jest.clearAllMocks();
    });
    describe("getIDForm", () => {
        it("debería retornar el formulario cuando existe", () => __awaiter(void 0, void 0, void 0, function* () {
            // Arrange
            const mockReport = { ingID: "ing1" };
            const mockFormIng = { ingID: "ing1", ingContent: {} };
            database_1.default.report.findFirst.mockResolvedValue(mockReport);
            database_1.default.formingresosfancturacion.findUnique.mockResolvedValue(mockFormIng);
            // Act
            const result = yield adapter.getIDForm("stu1", "room1");
            // Assert
            expect(result).toEqual(mockFormIng);
        }));
        it("debería retornar null cuando no existe el reporte", () => __awaiter(void 0, void 0, void 0, function* () {
            // Arrange
            database_1.default.report.findFirst.mockResolvedValue(null);
            database_1.default.formingresosfancturacion.findUnique.mockResolvedValue(null);
            // Act
            const result = yield adapter.getIDForm("stu1", "room1");
            // Assert
            expect(result).toBeNull();
        }));
    });
    describe("createForm", () => {
        it("debería crear un nuevo formulario", () => __awaiter(void 0, void 0, void 0, function* () {
            // Arrange
            const mockForm = { ingID: "ing1", ingContent: {} };
            database_1.default.formingresosfancturacion.create.mockResolvedValue(mockForm);
            // Act
            const result = yield adapter.createForm(mockForm);
            // Assert
            expect(result).toEqual(mockForm);
        }));
    });
    describe("updateForm", () => {
        it("debería actualizar el formulario existente", () => __awaiter(void 0, void 0, void 0, function* () {
            // Arrange
            const mockReport = { ingID: "ing1" };
            const mockForm = { ingID: "ing1", ingContent: {} };
            database_1.default.report.findFirst.mockResolvedValue(mockReport);
            database_1.default.formingresosfancturacion.update.mockResolvedValue(mockForm);
            // Act
            const result = yield adapter.updateForm("stu1", "room1", mockForm);
            // Assert
            expect(result).toEqual(mockForm);
        }));
    });
    describe("calculateReference", () => {
        it("debería retornar null cuando no existe el formulario", () => __awaiter(void 0, void 0, void 0, function* () {
            // Arrange
            const mockReport = { ingID: "ing1" };
            database_1.default.report.findFirst.mockResolvedValue(mockReport);
            database_1.default.formingresosfancturacion.findUnique.mockResolvedValue(null);
            // Act
            const result = yield adapter.calculateReference("stu1", "room1");
            // Assert
            expect(result).toBeNull();
        }));
    });
});
