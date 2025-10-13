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
const ImpuestoDiferidoGatewayAdapter_1 = require("../../../src/infrastructure/output/persistence/gateway/ImpuestoDiferidoGatewayAdapter");
const database_1 = __importDefault(require("../../../src/config/database"));
jest.mock("../../../src/config/database", () => ({
    __esModule: true,
    default: {
        report: {
            findFirst: jest.fn(),
        },
        formimpuestodiferido: {
            findUnique: jest.fn(),
            create: jest.fn(),
            update: jest.fn(),
        },
        formesfpatrimonio: {
            findUnique: jest.fn(),
        },
    },
}));
describe("ImpuestoDiferidoGatewayAdapter", () => {
    let adapter;
    beforeEach(() => {
        adapter = new ImpuestoDiferidoGatewayAdapter_1.ImpuestoDiferidoGatewayAdapter();
        jest.clearAllMocks();
    });
    describe("getIDForm", () => {
        it("debería retornar el formulario cuando existe", () => __awaiter(void 0, void 0, void 0, function* () {
            // Arrange
            const mockReport = { impID: "imp1" };
            const mockFormImpuesto = {
                impID: "imp1",
                impContent: {},
            };
            database_1.default.report.findFirst.mockResolvedValue(mockReport);
            database_1.default.formimpuestodiferido.findUnique.mockResolvedValue(mockFormImpuesto);
            // Act
            const result = yield adapter.getIDForm("stu1", "room1");
            // Assert
            expect(result).toEqual(mockFormImpuesto);
        }));
        it("debería retornar null cuando no existe el reporte", () => __awaiter(void 0, void 0, void 0, function* () {
            // Arrange
            database_1.default.report.findFirst.mockResolvedValue(null);
            database_1.default.formimpuestodiferido.findUnique.mockResolvedValue(null);
            // Act
            const result = yield adapter.getIDForm("stu1", "room1");
            // Assert
            expect(result).toBeNull();
        }));
    });
    describe("createForm", () => {
        it("debería crear un nuevo formulario", () => __awaiter(void 0, void 0, void 0, function* () {
            // Arrange
            const mockForm = {
                impID: "imp1",
                impContent: {},
            };
            database_1.default.formimpuestodiferido.create.mockResolvedValue(mockForm);
            // Act
            const result = yield adapter.createForm(mockForm);
            // Assert
            expect(result).toEqual(mockForm);
        }));
    });
    describe("updateForm", () => {
        it("debería actualizar el formulario existente", () => __awaiter(void 0, void 0, void 0, function* () {
            // Arrange
            const mockReport = { impID: "imp1" };
            const mockForm = {
                impID: "imp1",
                impContent: {},
            };
            database_1.default.report.findFirst.mockResolvedValue(mockReport);
            database_1.default.formimpuestodiferido.update.mockResolvedValue(mockForm);
            // Act
            const result = yield adapter.updateForm("stu1", "room1", mockForm);
            // Assert
            expect(result).toEqual(mockForm);
        }));
    });
});
