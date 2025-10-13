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
const ActivosFijosGatewayAdapter_1 = require("../../../src/infrastructure/output/persistence/gateway/ActivosFijosGatewayAdapter");
const database_1 = __importDefault(require("../../../src/config/database"));
jest.mock("../../../src/config/database", () => ({
    __esModule: true,
    default: {
        report: {
            findFirst: jest.fn(),
        },
        formactivosfijos: {
            findUnique: jest.fn(),
            create: jest.fn(),
            update: jest.fn(),
        },
    },
}));
describe("ActivosFijosGatewayAdapter", () => {
    let adapter;
    const mockReport = { repID: "rep1", stuID: "stu1", roomID: "room1", actID: "act1" };
    const mockActivosFijos = {
        actID: "act1",
        actContent: { /* structure */},
    };
    beforeEach(() => {
        adapter = new ActivosFijosGatewayAdapter_1.ActivosFijosGatewayAdapter();
        jest.clearAllMocks();
    });
    describe("getIDForm", () => {
        it("debe retornar el formulario de activos fijos cuando existe", () => __awaiter(void 0, void 0, void 0, function* () {
            database_1.default.report.findFirst.mockResolvedValue(mockReport);
            database_1.default.formactivosfijos.findUnique.mockResolvedValue(mockActivosFijos);
            const result = yield adapter.getIDForm("stu1", "room1");
            expect(result).toEqual(mockActivosFijos);
            expect(database_1.default.report.findFirst).toHaveBeenCalledWith({
                where: { stuID: "stu1", roomID: "room1" }
            });
            expect(database_1.default.formactivosfijos.findUnique).toHaveBeenCalledWith({
                where: { actID: "act1" }
            });
        }));
        it("debe retornar null cuando no existe el formulario", () => __awaiter(void 0, void 0, void 0, function* () {
            database_1.default.report.findFirst.mockResolvedValue(mockReport);
            database_1.default.formactivosfijos.findUnique.mockResolvedValue(null);
            const result = yield adapter.getIDForm("stu1", "room1");
            expect(result).toBeNull();
        }));
        it("debe manejar IDs vacíos correctamente", () => __awaiter(void 0, void 0, void 0, function* () {
            const reportWithoutActID = Object.assign(Object.assign({}, mockReport), { actID: undefined });
            database_1.default.report.findFirst.mockResolvedValue(reportWithoutActID);
            database_1.default.formactivosfijos.findUnique.mockResolvedValue(null);
            const result = yield adapter.getIDForm("stu1", "room1");
            expect(result).toBeNull();
            expect(database_1.default.formactivosfijos.findUnique).toHaveBeenCalledWith({
                where: { actID: undefined }
            });
        }));
    });
    describe("createForm", () => {
        it("debe crear un formulario de activos fijos exitosamente", () => __awaiter(void 0, void 0, void 0, function* () {
            const newFormData = {
                actContent: { PropiedadesPlantaYEquipo: { Terrenos: {} } },
            };
            database_1.default.formactivosfijos.create.mockResolvedValue(mockActivosFijos);
            const result = yield adapter.createForm(newFormData);
            expect(result).toEqual(mockActivosFijos);
            expect(database_1.default.formactivosfijos.create).toHaveBeenCalledWith({
                data: { actContent: Object.assign({}, newFormData.actContent) }
            });
        }));
        it("debe crear un formulario con contenido vacío", () => __awaiter(void 0, void 0, void 0, function* () {
            const emptyForm = { actContent: {} };
            database_1.default.formactivosfijos.create.mockResolvedValue({ actID: "new1", actContent: {} });
            const result = yield adapter.createForm(emptyForm);
            expect(result.actContent).toEqual({});
            expect(database_1.default.formactivosfijos.create).toHaveBeenCalled();
        }));
        it("debe crear un formulario con datos completos", () => __awaiter(void 0, void 0, void 0, function* () {
            const fullForm = {
                actContent: {
                    PropiedadesPlantaYEquipo: { Terrenos: {}, Edificios: {}, Vehiculos: {} }
                },
            };
            database_1.default.formactivosfijos.create.mockResolvedValue(fullForm);
            const result = yield adapter.createForm(fullForm);
            expect(result).toEqual(fullForm);
        }));
    });
    describe("updateForm", () => {
        it("debe actualizar un formulario de activos fijos exitosamente", () => __awaiter(void 0, void 0, void 0, function* () {
            const updateData = { actContent: { PropiedadesPlantaYEquipo: {} } };
            database_1.default.report.findFirst.mockResolvedValue(mockReport);
            database_1.default.formactivosfijos.update.mockResolvedValue(Object.assign(Object.assign({}, mockActivosFijos), updateData));
            const result = yield adapter.updateForm("stu1", "room1", updateData);
            expect(result).toEqual(Object.assign(Object.assign({}, mockActivosFijos), updateData));
            expect(database_1.default.formactivosfijos.update).toHaveBeenCalledWith({
                where: { actID: "act1" },
                data: { actContent: Object.assign({}, updateData) }
            });
        }));
        it("debe manejar actualización cuando no existe reporte", () => __awaiter(void 0, void 0, void 0, function* () {
            const updateData = { actContent: {} };
            database_1.default.report.findFirst.mockResolvedValue(null);
            database_1.default.formactivosfijos.update.mockRejectedValue(new Error("Record not found"));
            yield expect(adapter.updateForm("stu1", "room1", updateData)).rejects.toThrow();
        }));
        it("debe actualizar parcialmente el contenido", () => __awaiter(void 0, void 0, void 0, function* () {
            const partialUpdate = { actContent: { PropiedadesDeInversión: {} } };
            database_1.default.report.findFirst.mockResolvedValue(mockReport);
            database_1.default.formactivosfijos.update.mockResolvedValue(partialUpdate);
            const result = yield adapter.updateForm("stu1", "room1", partialUpdate);
            expect(result).toEqual(partialUpdate);
        }));
    });
    describe("calculateReference", () => {
        it("debe retornar el formulario sin cambios (no hay cálculo)", () => __awaiter(void 0, void 0, void 0, function* () {
            database_1.default.report.findFirst.mockResolvedValue(mockReport);
            database_1.default.formactivosfijos.findUnique.mockResolvedValue(mockActivosFijos);
            const result = yield adapter.calculateReference("stu1", "room1");
            expect(result).toEqual(mockActivosFijos);
            expect(result).toBe(mockActivosFijos);
        }));
        it("debe retornar null cuando no existe el reporte", () => __awaiter(void 0, void 0, void 0, function* () {
            database_1.default.report.findFirst.mockResolvedValue(null);
            database_1.default.formactivosfijos.findUnique.mockResolvedValue(null);
            const result = yield adapter.calculateReference("stu1", "room1");
            expect(result).toBeNull();
        }));
        it("debe retornar el formulario completo sin transformaciones", () => __awaiter(void 0, void 0, void 0, function* () {
            const complexForm = Object.assign(Object.assign({}, mockActivosFijos), { actContent: { PropiedadesPlantaYEquipo: { /* datos extensos */} } });
            database_1.default.report.findFirst.mockResolvedValue(mockReport);
            database_1.default.formactivosfijos.findUnique.mockResolvedValue(complexForm);
            const result = yield adapter.calculateReference("stu1", "room1");
            expect(result).toEqual(complexForm);
        }));
    });
});
