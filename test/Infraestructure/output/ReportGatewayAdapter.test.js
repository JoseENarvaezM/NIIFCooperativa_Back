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
const ReportGatewayAdapter_1 = require("../../../src/infrastructure/output/persistence/gateway/ReportGatewayAdapter");
const ReportModel_1 = require("../../../src/domain/models/ReportModel");
const database_1 = __importDefault(require("../../../src/config/database"));
jest.mock("../../../src/config/database", () => ({
    __esModule: true,
    default: {
        report: {
            findUnique: jest.fn(),
            create: jest.fn(),
        },
    },
}));
describe("ReportGatewayAdapter", () => {
    let reportGatewayAdapter;
    beforeEach(() => {
        reportGatewayAdapter = new ReportGatewayAdapter_1.ReportGatewayAdapter();
        jest.clearAllMocks();
    });
    describe("getIDReport", () => {
        it("debería retornar el reporte cuando existe", () => __awaiter(void 0, void 0, void 0, function* () {
            // Arrange
            const mockReport = {
                repID: "rep1",
                stuID: "stu1",
                roomID: "room1",
                carID: "car1",
                detID: "det1",
                esfID: "esf1",
                renID: "ren1",
                impID: "imp1",
                ingID: "ing1",
                actID: "act1",
                resID: "res1",
                r110ID: "r1101",
            };
            database_1.default.report.findUnique.mockResolvedValue(mockReport);
            // Act
            const result = yield reportGatewayAdapter.getIDReport("rep1");
            // Assert
            expect(result).toEqual(mockReport);
            expect(database_1.default.report.findUnique).toHaveBeenCalledWith({
                where: { repID: "rep1" },
            });
        }));
        it("debería retornar null cuando el reporte no existe", () => __awaiter(void 0, void 0, void 0, function* () {
            // Arrange
            database_1.default.report.findUnique.mockResolvedValue(null);
            // Act
            const result = yield reportGatewayAdapter.getIDReport("rep999");
            // Assert
            expect(result).toBeNull();
            expect(database_1.default.report.findUnique).toHaveBeenCalledWith({
                where: { repID: "rep999" },
            });
        }));
    });
    describe("createReport", () => {
        it("debería crear un reporte correctamente", () => __awaiter(void 0, void 0, void 0, function* () {
            // Arrange
            const mockReportInput = new ReportModel_1.Report("", "stu1", "room1", "car1", "det1", "esf1", "ren1", "imp1", "ing1", "act1", "res1", "r1101");
            const mockCreatedReport = {
                repID: "rep1",
                stuID: "stu1",
                roomID: "room1",
                carID: "car1",
                detID: "det1",
                esfID: "esf1",
                renID: "ren1",
                impID: "imp1",
                ingID: "ing1",
                actID: "act1",
                resID: "res1",
                r110ID: "r1101",
            };
            database_1.default.report.create.mockResolvedValue(mockCreatedReport);
            // Act
            const result = yield reportGatewayAdapter.createReport(mockReportInput);
            // Assert
            expect(result).toBeInstanceOf(ReportModel_1.Report);
            expect(result.repID).toBe("rep1");
            expect(result.stuID).toBe("stu1");
            expect(result.roomID).toBe("room1");
            expect(result.carID).toBe("car1");
            expect(result.detID).toBe("det1");
            expect(result.esfID).toBe("esf1");
            expect(result.renID).toBe("ren1");
            expect(result.impID).toBe("imp1");
            expect(result.ingID).toBe("ing1");
            expect(result.actID).toBe("act1");
            expect(result.resID).toBe("res1");
            expect(result.r110ID).toBe("r1101");
            expect(database_1.default.report.create).toHaveBeenCalledWith({
                data: {
                    stuID: "stu1",
                    roomID: "room1",
                    carID: "car1",
                    detID: "det1",
                    esfID: "esf1",
                    renID: "ren1",
                    impID: "imp1",
                    ingID: "ing1",
                    actID: "act1",
                    resID: "res1",
                    r110ID: "r1101",
                },
            });
        }));
        it("debería crear un reporte con todos los IDs de formularios", () => __awaiter(void 0, void 0, void 0, function* () {
            // Arrange
            const mockReportInput = new ReportModel_1.Report("", "stu2", "room2", "car2", "det2", "esf2", "ren2", "imp2", "ing2", "act2", "res2", "r1102");
            const mockCreatedReport = {
                repID: "rep2",
                stuID: "stu2",
                roomID: "room2",
                carID: "car2",
                detID: "det2",
                esfID: "esf2",
                renID: "ren2",
                impID: "imp2",
                ingID: "ing2",
                actID: "act2",
                resID: "res2",
                r110ID: "r1102",
            };
            database_1.default.report.create.mockResolvedValue(mockCreatedReport);
            // Act
            const result = yield reportGatewayAdapter.createReport(mockReportInput);
            // Assert
            expect(result).toBeInstanceOf(ReportModel_1.Report);
            expect(result.repID).toBe("rep2");
            expect(database_1.default.report.create).toHaveBeenCalledTimes(1);
        }));
    });
});
