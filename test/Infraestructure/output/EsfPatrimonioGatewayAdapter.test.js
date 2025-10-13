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
const EsfPatrimonioGatewayAdapter_1 = require("../../../src/infrastructure/output/persistence/gateway/EsfPatrimonioGatewayAdapter");
const database_1 = __importDefault(require("../../../src/config/database"));
jest.mock("../../../src/config/database", () => ({
    __esModule: true,
    default: {
        report: {
            findFirst: jest.fn(),
        },
        formesfpatrimonio: {
            findUnique: jest.fn(),
            create: jest.fn(),
            update: jest.fn(),
        },
        formdetallerenglones: {
            findUnique: jest.fn(),
        },
        formactivosfijos: {
            findUnique: jest.fn(),
        },
    },
}));
describe("EsfPatrimonioGatewayAdapter", () => {
    let adapter;
    beforeEach(() => {
        adapter = new EsfPatrimonioGatewayAdapter_1.EsfPatrimonioGatewayAdapter();
        jest.clearAllMocks();
    });
    describe("getIDForm", () => {
        it("debería retornar el formulario de patrimonio cuando existe", () => __awaiter(void 0, void 0, void 0, function* () {
            // Arrange
            const mockReport = { reportID: "rep1", esfID: "esf1", stuID: "stu1", roomID: "room1" };
            const mockFormEsf = { esfID: "esf1", esfContent: { data: "test" } };
            database_1.default.report.findFirst.mockResolvedValue(mockReport);
            database_1.default.formesfpatrimonio.findUnique.mockResolvedValue(mockFormEsf);
            // Act
            const result = yield adapter.getIDForm("stu1", "room1");
            // Assert
            expect(result).toEqual(mockFormEsf);
            expect(database_1.default.report.findFirst).toHaveBeenCalledWith({
                where: { stuID: "stu1", roomID: "room1" },
            });
            expect(database_1.default.formesfpatrimonio.findUnique).toHaveBeenCalledWith({
                where: { esfID: "esf1" },
            });
        }));
        it("debería retornar null cuando no existe el formulario", () => __awaiter(void 0, void 0, void 0, function* () {
            // Arrange
            const mockReport = { reportID: "rep1", esfID: "esf1", stuID: "stu1", roomID: "room1" };
            database_1.default.report.findFirst.mockResolvedValue(mockReport);
            database_1.default.formesfpatrimonio.findUnique.mockResolvedValue(null);
            // Act
            const result = yield adapter.getIDForm("stu1", "room1");
            // Assert
            expect(result).toBeNull();
        }));
    });
    describe("createForm", () => {
        it("debería crear un formulario de patrimonio exitosamente", () => __awaiter(void 0, void 0, void 0, function* () {
            // Arrange
            const mockFormData = {
                esfContent: {
                    Activos: { Total: 1000000 },
                    Pasivos: { Total: 500000 },
                },
            };
            const mockCreatedForm = Object.assign({ esfID: "esf1" }, mockFormData);
            database_1.default.formesfpatrimonio.create.mockResolvedValue(mockCreatedForm);
            // Act
            const result = yield adapter.createForm(mockFormData);
            // Assert
            expect(result).toEqual(mockCreatedForm);
            expect(database_1.default.formesfpatrimonio.create).toHaveBeenCalledWith({
                data: {
                    esfContent: mockFormData.esfContent,
                },
            });
        }));
        it("debería crear un formulario con contenido vacío", () => __awaiter(void 0, void 0, void 0, function* () {
            // Arrange
            const mockFormData = { esfContent: {} };
            const mockCreatedForm = { esfID: "esf1", esfContent: {} };
            database_1.default.formesfpatrimonio.create.mockResolvedValue(mockCreatedForm);
            // Act
            const result = yield adapter.createForm(mockFormData);
            // Assert
            expect(result).toEqual(mockCreatedForm);
        }));
        it("debería crear un formulario con valores límite grandes", () => __awaiter(void 0, void 0, void 0, function* () {
            // Arrange
            const mockFormData = {
                esfContent: {
                    Activos: { Total: Number.MAX_SAFE_INTEGER },
                },
            };
            const mockCreatedForm = Object.assign({ esfID: "esf1" }, mockFormData);
            database_1.default.formesfpatrimonio.create.mockResolvedValue(mockCreatedForm);
            // Act
            const result = yield adapter.createForm(mockFormData);
            // Assert
            expect(result).toEqual(mockCreatedForm);
        }));
    });
    describe("updateForm", () => {
        it("debería actualizar el formulario exitosamente", () => __awaiter(void 0, void 0, void 0, function* () {
            // Arrange
            const mockReport = { reportID: "rep1", esfID: "esf1", stuID: "stu1", roomID: "room1" };
            const mockFormData = {
                esfContent: {
                    Activos: { Total: 2000000 },
                },
            };
            const mockUpdatedForm = Object.assign({ esfID: "esf1" }, mockFormData);
            database_1.default.report.findFirst.mockResolvedValue(mockReport);
            database_1.default.formesfpatrimonio.update.mockResolvedValue(mockUpdatedForm);
            // Act
            const result = yield adapter.updateForm("stu1", "room1", mockFormData);
            // Assert
            expect(result).toEqual(mockUpdatedForm);
            expect(database_1.default.formesfpatrimonio.update).toHaveBeenCalledWith({
                where: { esfID: "esf1" },
                data: {
                    esfContent: mockFormData,
                },
            });
        }));
        it("debería manejar actualización cuando el reporte no existe", () => __awaiter(void 0, void 0, void 0, function* () {
            // Arrange
            database_1.default.report.findFirst.mockResolvedValue(null);
            database_1.default.formesfpatrimonio.update.mockResolvedValue(null);
            // Act
            const result = yield adapter.updateForm("stu999", "room999", { esfContent: {} });
            // Assert
            expect(database_1.default.formesfpatrimonio.update).toHaveBeenCalledWith({
                where: { esfID: undefined },
                data: { esfContent: { esfContent: {} } },
            });
        }));
        it("debería actualizar formulario con cambios parciales", () => __awaiter(void 0, void 0, void 0, function* () {
            // Arrange
            const mockReport = { reportID: "rep1", esfID: "esf1", stuID: "stu1", roomID: "room1" };
            const mockFormData = {
                esfContent: {
                    Activos: { ActivosEquivalentesEfectivo: { Efectivo: { ValorContable: 50000 } } },
                },
            };
            const mockUpdatedForm = Object.assign({ esfID: "esf1" }, mockFormData);
            database_1.default.report.findFirst.mockResolvedValue(mockReport);
            database_1.default.formesfpatrimonio.update.mockResolvedValue(mockUpdatedForm);
            // Act
            const result = yield adapter.updateForm("stu1", "room1", mockFormData);
            // Assert
            expect(result).toEqual(mockUpdatedForm);
        }));
    });
    describe("calculateReference", () => {
        it("debería retornar null cuando faltan datos requeridos", () => __awaiter(void 0, void 0, void 0, function* () {
            // Arrange
            const mockReport = { reportID: "rep1", esfID: "esf1", detID: "det1", actID: "act1", stuID: "stu1", roomID: "room1" };
            database_1.default.report.findFirst.mockResolvedValue(mockReport);
            database_1.default.formesfpatrimonio.findUnique.mockResolvedValue(null);
            // Act
            const result = yield adapter.calculateReference("stu1", "room1");
            // Assert
            expect(result).toBeNull();
        }));
        it("debería manejar contenido null en detalle renglones", () => __awaiter(void 0, void 0, void 0, function* () {
            // Arrange
            const mockReport = { reportID: "rep1", esfID: "esf1", detID: "det1", actID: "act1", stuID: "stu1", roomID: "room1" };
            const mockFormEsf = { esfID: "esf1", esfContent: { Activos: {} } };
            const mockDetalleRenglones = { detID: "det1", detContent: null };
            database_1.default.report.findFirst.mockResolvedValue(mockReport);
            database_1.default.formesfpatrimonio.findUnique.mockResolvedValue(mockFormEsf);
            database_1.default.formdetallerenglones.findUnique.mockResolvedValue(mockDetalleRenglones);
            // Act
            const result = yield adapter.calculateReference("stu1", "room1");
            // Assert
            expect(result).toEqual(mockFormEsf);
        }));
    });
});
