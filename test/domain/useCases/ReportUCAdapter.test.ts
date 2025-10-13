import { ReportUCAdapter } from "../../../src/domain/useCases/ReportUCAdapter";
import { ReportGatewayIntPort } from "../../../src/application/output/ReportGatewayIntPort";
import { Report } from "../../../src/domain/models/ReportModel";

describe("ReportUCAdapter", () => {
  let reportUCAdapter: ReportUCAdapter;
  let mockReportGateway: jest.Mocked<ReportGatewayIntPort>;

  beforeEach(() => {
    mockReportGateway = {
      getIDReport: jest.fn(),
      createReport: jest.fn(),
    } as jest.Mocked<ReportGatewayIntPort>;

    reportUCAdapter = new ReportUCAdapter(mockReportGateway);
  });

  describe("getReportByID", () => {
    it("debería retornar el reporte cuando existe", async () => {
      // Arrange
      const mockReport: Report = {
        repID: "rep1",
        stuID: "stu1",
        roomID: "room1",
      } as Report;
      mockReportGateway.getIDReport.mockResolvedValue(mockReport);

      // Act
      const result = await reportUCAdapter.getReportByID("rep1");

      // Assert
      expect(result).toEqual(mockReport);
      expect(mockReportGateway.getIDReport).toHaveBeenCalledWith("rep1");
    });

    it("debería lanzar error cuando el reporte no existe", async () => {
      // Arrange
      mockReportGateway.getIDReport.mockResolvedValue(null);

      // Act & Assert
      await expect(reportUCAdapter.getReportByID("rep999")).rejects.toThrow(
        "Reporte con ID rep999 no se encontró."
      );
    });
  });
});
