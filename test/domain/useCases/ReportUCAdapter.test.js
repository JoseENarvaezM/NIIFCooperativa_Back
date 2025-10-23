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
const ReportUCAdapter_1 = require("../../../src/domain/useCases/ReportUCAdapter");
describe("ReportUCAdapter", () => {
    let reportUCAdapter;
    let mockReportGateway;
    beforeEach(() => {
        mockReportGateway = {
            getIDReport: jest.fn(),
            createReport: jest.fn(),
        };
        reportUCAdapter = new ReportUCAdapter_1.ReportUCAdapter(mockReportGateway);
    });
    describe("getReportByID", () => {
        it("debería retornar el reporte cuando existe", () => __awaiter(void 0, void 0, void 0, function* () {
            // Arrange
            const mockReport = {
                repID: "rep1",
                stuID: "stu1",
                roomID: "room1",
            };
            mockReportGateway.getIDReport.mockResolvedValue(mockReport);
            // Act
            const result = yield reportUCAdapter.getReportByID("rep1");
            // Assert
            expect(result).toEqual(mockReport);
            expect(mockReportGateway.getIDReport).toHaveBeenCalledWith("rep1");
        }));
        it("debería lanzar error cuando el reporte no existe", () => __awaiter(void 0, void 0, void 0, function* () {
            // Arrange
            mockReportGateway.getIDReport.mockResolvedValue(null);
            // Act & Assert
            yield expect(reportUCAdapter.getReportByID("rep999")).rejects.toThrow("Reporte con ID rep999 no se encontró.");
        }));
    });
});
